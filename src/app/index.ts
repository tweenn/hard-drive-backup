const fs = require('fs-extra');
const path = require('path');

const configPath = path.resolve(process.execPath, '../config.json');

const configFile = fs.readJsonSync(configPath);

const now = (new Date())
	.toISOString()
	.replace('T', '_')
	.split(':')
	.join('-')
	.split('.')
	?.[0];

const entryPoint = path.resolve(configFile.entry);
const exitPoint = path.resolve(configFile.exit, now);

fs.ensureDirSync(exitPoint);

fs.copySync(entryPoint, exitPoint);
