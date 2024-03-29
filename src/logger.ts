import winston from 'winston';
import { ENV } from './env';
import { Format } from '../node_modules/logform';

let format: Format;
if (ENV == 'production' && ENV == 'development') {
  format = winston.format.combine(
    winston.format.printf(info => {
      return `[${info.level}]: ${info.message}`;
    }),
  );
} else {
  format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize({ all: true }),
    winston.format.printf(info => {
      return `[${info.timestamp}][${info.level}]: ${info.message}`;
    }),
  );
}

const logConfiguration = {
  'transports': [
    new winston.transports.Console({
      level: "info",
      handleExceptions: true,
      format: format,
    })
  ]
};

const logger = winston.createLogger(logConfiguration);

export default logger;
