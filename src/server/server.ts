import Express = require("express");
import bodyParser = require("body-parser");

export class Server {
  public constructor(application: Express.Application) {
    application.use(bodyParser.urlencoded({ extended: true }));
    application.use(bodyParser.json());
    application.listen(8080);

    console.log("server started");
  }
}
