
import { Container } from 'inversify';
import path from 'path';
import fs from 'fs';
import { HelloCommand } from './commands/hello.command';

// auto import folder paths
const autoImportPaths = [
  './datasources',
  './repositories',
  './services',
  './controllers',
  './commands',
];
const ignoreFiles = ['index.ts', /base\..+\.ts/gm];

const container = new Container();

autoImportPaths.forEach((folderPath) => {
  const files = fs.readdirSync(__dirname + '/' + folderPath);
  const folderName = path.basename(folderPath).replace(/s$/, '');

  files.forEach((file) => {
    if (ignoreFiles.some((ignoreFile) => file.match(ignoreFile))) return;

    const filePath = __dirname + '/' + folderPath + '/' + file;
    const module = require(filePath);
    const className = Object.keys(module)[0];
    const classInstance = new module[className]();
    if (folderPath === './datasources')
      container.bind(folderName + '.' + className).to(classInstance.constructor).inSingletonScope();
    else if(folderPath === './commands')
      container.bind(className).to(classInstance.constructor);
    else
      container.bind(folderName + '.' + className).to(classInstance.constructor);
  });
});

export default container;
