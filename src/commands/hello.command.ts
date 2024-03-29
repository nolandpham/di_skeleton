import { BaseCommand } from "./base.command";
import { injectable } from 'inversify';

@injectable()
export class HelloCommand extends BaseCommand {
  public name = 'HELLO_COMMAND';

  constructor() {
    super();
  }

  async execute(params: Array<string>) {
    console.log('Hello World!');
  }
}