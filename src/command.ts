import "reflect-metadata";
import container from "./inversify.config";
import logger from "./logger";

import "./commands";
import { BaseCommand } from "./commands";

async function main() {
  const commandName = process.argv[2];
  if (!commandName) {
    logger.error("Command name is required");
    return;
  }
  const command = container.get<BaseCommand>(commandName);
  if (!command) {
    logger.error(`Command ${commandName} not found`);
    return;
  }
  const params = process.argv.slice(3);
  logger.info(`Executing command ${commandName}: ${params}`);
  command.execute(params);
}

main().then(() => {
  process.exit(0);
}); 
