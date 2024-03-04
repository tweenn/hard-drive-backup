const fs = require('fs-extra');
import path from 'path';
import config from './config';

const distPath = path.resolve('./dist');
const configPath = path.resolve(distPath, 'config.json');

const testPath = path.resolve(__dirname, '../../');

config.entry = path.resolve(testPath, config.entry);
config.exit = path.resolve(testPath, config.exit);

fs.ensureDirSync(distPath);

fs.writeJsonSync(configPath, config, { spaces: '\t' });
