import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import 'tsconfig-paths/register'
import 'dotenv/config'
import 'solidity-coverage'

const config: HardhatUserConfig = {
	solidity: {
		compilers: [
			{
				version: '0.8.18',
				settings: {
					optimizer: {
						enabled: true,
						runs: 2000,
					},
				},
			},
		],
	},
	gasReporter: {
		currency: 'USD',
		gasPrice: 100,
		enabled: process.env.REPORT_GAS ? true : false,
		coinmarketcap: process.env.COINMARKETCAP_API_KEY,
		maxMethodDiff: 10,
	},
}

export default config
