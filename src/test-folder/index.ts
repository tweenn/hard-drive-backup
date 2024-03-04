const fs = require('fs-extra');
import path from 'path';
import config from '../config/config';

const entrypoint = path.resolve(config.entry);
const simpleExampleFile = path.resolve(entrypoint, 'test.json')

fs.ensureDirSync(entrypoint);

fs.writeJsonSync(simpleExampleFile, { executed: true });
