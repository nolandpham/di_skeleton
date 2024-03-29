import { injectable } from 'inversify';

@injectable()
export abstract class BaseCommand {
  // abstract name: string;
  abstract execute(params: Array<string>): void;
}
