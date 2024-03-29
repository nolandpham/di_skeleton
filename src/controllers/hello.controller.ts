import { Controller, controller, httpGet, request, response } from "inversify-express-utils";
import { Request, Response } from "express";

@controller('/hello')
export class HelloController implements Controller {
  constructor() {}

  @httpGet('/there') // Add the missing third argument
  public async orderResult(
    @request() req: Request,
    @response() resp: Response,
  ) {
    return resp.status(200).json({ msg: 'Hello World!' });
  }
}
