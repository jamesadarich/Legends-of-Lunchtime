///<reference path="../../node_modules/inversify/type_definitions/inversify.d.ts" />
///<reference path="../../typings/express/express.d.ts" />

import * as Inversify from "inversify";
import * as Express from "express";
import { ProductService } from "./api/products";
import { Server } from "./server";

export class AppKernel extends Inversify.Kernel {
  public constructor() {
    super();
    this.bind(new Inversify.TypeBinding<Express.Application>(
      "application",
      Express,
      Inversify.TypeBindingScopeEnum.Singleton));
    this.bind(new Inversify.TypeBinding<Express.Server>(
      "server",
      Server));
    this.bind(new Inversify.TypeBinding<Express.ProductService>(
      "productService",
      ProductService));
  }
}
