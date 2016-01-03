///<reference path="../../../typings/express/express.d.ts" />

import Express = require("express");

export class ProductService {
  public constructor(application: Express.Application) {
    application.get("/api/products", this.getAll);
  }

  public getAll(request: Express.Request, response: Express.Response) {
    response.send(200, { success: 'ful' });
  }
}
