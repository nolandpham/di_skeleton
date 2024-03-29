import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";
import express from 'express';
import bodyParser from "body-parser";
import { PORT } from "./env";
import logger from "./logger";
import cors from "cors";

async function main() {
  let server = new InversifyExpressServer(container, null, { rootPath: "/api/v1" }, null, null);
  server.setConfig((app) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Error handling middleware
    app.use((err, req, res, next) => {
      logger.error(`Unexpected error: ${err}`);
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
  });

  let appConfigured = server.build();
  let serve = appConfigured.listen(PORT);

  return serve;
}

main().then(() => {
  logger.info(`App running on ${PORT}`);
}); 
