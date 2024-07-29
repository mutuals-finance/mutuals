import { task } from 'hardhat/config';

import { compareLastTwoReports } from '../scripts/compare-reports';

export default task(
	'compare-reports',
	'Compare last two gas reports'
).setAction(async (taskArgs, hre) => {
	compareLastTwoReports(hre);
});
