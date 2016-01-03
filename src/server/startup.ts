///<reference path="../../typings/express/express.d.ts" />
import { AppKernel } from "./kernel";
import { ProductService } from "./api/products";

let kernel = new AppKernel();

kernel.resolve<Express.Server>("server");
console.log("server successfully started");

kernel.resolve<ProductService>("productService");
console.log("product service launched");
