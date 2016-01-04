///<reference path="../../../typings/express/express.d.ts" />

import Express = require("express");
import { ProductModel } from "../models/product";

export class ProductService {
  public constructor(application: Express.Application) {
    application.get("/api/products", this.getAll);
    application.get("/api/product/:id", this.getById);
    application.post("/api/product", this.create);
    application.put("/api/product/:id", this.update);
    application.delete("/api/product/:id", this.delete);
  }

  public getById(request: Express.Request, response: Express.Response) {
     let productModel = new ProductModel();
     productModel.id = parseInt(request.params.id);
     response.send(productModel);
  }

  public getAll(request: Express.Request, response: Express.Response) {
    response.send([new ProductModel(), new ProductModel(), new ProductModel()]);
  }

  public create(request: Express.Request, response: Express.Response) {
     let productModel = new ProductModel();
     productModel.id = parseInt(request.params.id);
     response.send(productModel);
  }

  public update(request: Express.Request, response: Express.Response) {
     let productModel = new ProductModel();
     let id = parseInt(request.params.id);
     productModel.id = id;
     console.log("updating product", id);
     response.send(productModel);
  }

  public delete(request: Express.Request, response: Express.Response) {
     let productModel = new ProductModel();
     let id = parseInt(request.params.id);
     productModel.id = id;
     console.log("deleting product", id);
     response.sendStatus(200);
  }
}
