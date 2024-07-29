import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export const GAS_REPORTS_DIR = path.join(__dirname, '../.gas_reports');

if (!fs.existsSync(GAS_REPORTS_DIR)) {
	fs.mkdirSync(GAS_REPORTS_DIR);
}

export type RawMethodReport = {
	contract: string;
	method: string;
	min: number;
	max: number;
	avg: number;
	calls: number;
};

export type RawGasReport = {
	name: string;
	path: string;
	timestamp: number;
	report: RawMethodReport[];
};

export type MethodReport = {
	method: string;
	min: number;
	max: number;
	avg: number;
	calls: number;
};

export type ContractReport = {
	name: string;
	deployedBytecodeSize: number;
	bytecodeSize: number;
	methods: MethodReport[];
};

export type CommitGasReport = {
	commitHash: string;
	contractReports: Record<string, ContractReport>;
};

export function getCommitHash() {
	return execSync('git rev-parse HEAD').toString().trim();
}

export function getReportPathForCommit(commit?: string): string {
	if (!commit) {
		commit = getCommitHash();
	}
	return path.join(GAS_REPORTS_DIR, `${commit}.md`);
}

export function haveReportForCurrentCommit(): boolean {
	return fs.existsSync(getReportPathForCommit());
}

export function fileLastUpdate(filePath: string): number {
	let timestamp = parseInt(
		execSync(`git log -1 --pretty="format:%ct" ${filePath}`)
			.toString()
			.trim() || '0'
	);
	if (!timestamp) {
		timestamp = Math.floor(+fs.statSync(filePath).mtime / 1000);
	}
	return timestamp;
}

function parseRawReport(text: string): RawMethodReport[] {
	const lines = text
		.split('\n')
		.slice(6)
		.filter((ln) => ln.indexOf('·') !== 0);
	const rows = lines
		.map((ln) => ln.replace(/\|/g, '').replace(/\s/g, '').split('·'))
		.filter((row) => row.length === 7)
		.map(([contract, method, min, max, avg, calls]) => ({
			contract,
			method,
			min: +min,
			max: +max,
			avg: +avg,
			calls: +calls,
		}));
	return rows;
}

export function getAllRawReports(): RawGasReport[] {
	const reports = fs
		.readdirSync(GAS_REPORTS_DIR)
		.filter((file) => path.extname(file) === '.md')
		.map((file) => {
			const reportPath = path.join(GAS_REPORTS_DIR, file);
			const timestamp = fileLastUpdate(reportPath);
			const text = fs.readFileSync(reportPath, 'utf8');
			const report = parseRawReport(text);
			return {
				name: path.parse(file).name,
				path: reportPath,
				timestamp,
				report,
			};
		});

	reports.sort((a, b) => b.timestamp - a.timestamp);
	return reports;
}

export function getAllReports(): (CommitGasReport & {
	name: string;
	path: string;
	timestamp: number;
})[] {
	const reports = fs
		.readdirSync(GAS_REPORTS_DIR)
		.filter((file) => path.extname(file) === '.json')
		.map((file) => {
			const reportPath = path.join(GAS_REPORTS_DIR, file);
			const timestamp = fileLastUpdate(reportPath);
			const report = require(reportPath) as CommitGasReport;
			return {
				name: path.parse(file).name,
				path: reportPath,
				timestamp,
				...report,
			};
		});

	reports.sort((a, b) => b.timestamp - a.timestamp);
	return reports;
}

export function getNodeUrl(networkName: string): string {
	if (networkName) {
		const uri = process.env['ETH_NODE_URI_' + networkName.toUpperCase()];
		if (uri && uri !== '') {
			return uri;
		}
	}

	if (networkName === 'localhost') {
		// do not use ETH_NODE_URI
		return 'http://localhost:8545';
	}

	let uri = process.env.ETH_NODE_URI;
	if (uri) {
		uri = uri.replace('{{networkName}}', networkName);
	}
	if (!uri || uri === '') {
		// throw new Error(`environment variable "ETH_NODE_URI" not configured `);
		return '';
	}
	if (uri.indexOf('{{') >= 0) {
		throw new Error(
			`invalid uri or network not supported by node provider : ${uri}`
		);
	}
	return uri;
}

export function getMnemonic(networkName?: string): string {
	if (networkName) {
		const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()];
		if (mnemonic && mnemonic !== '') {
			return mnemonic;
		}
	}

	const mnemonic = process.env.MNEMONIC;
	if (!mnemonic || mnemonic === '') {
		return 'test test test test test test test test test test test junk';
	}
	return mnemonic;
}

export function getAccounts(networkName?: string): { mnemonic: string } {
	return { mnemonic: getMnemonic(networkName) };
}

export function getNetwork(networkName?: string) {
	return {
		url: getNodeUrl(networkName ?? 'localhost'),
		accounts: getAccounts(networkName),
	};
}
