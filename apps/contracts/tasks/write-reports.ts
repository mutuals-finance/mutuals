import { task } from 'hardhat/config';

import { writeReports } from '../scripts/write-reports';

export default task('write-reports', 'Write pending gas reports').setAction(
	async (taskArgs, hre) => {
		writeReports(hre);
	}
);
