import { task } from 'hardhat/config';

import { printLastReport } from '../scripts/print-report';

export default task('print-report', 'Print the last gas report').setAction(
	async (taskArgs, hre) => {
		printLastReport(hre);
	}
);
