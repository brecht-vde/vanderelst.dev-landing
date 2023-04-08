import { IRunner } from "./application/irunner.js";
import ISchema from "./application/ischema.js";
import dotenv from "dotenv";
import SchemaV1 from "./infrastructure/schemaV1.js";
import HygraphOptions from "./infrastructure/options.js";
import Runner from "./infrastructure/runner.js";

// Config
dotenv.config();

const authToken = process.env.HYGRAPH_AUTH_TOKEN;
const endpoint = process.env.HYGRAPH_ENDPOINT;

if (!authToken) throw new Error("HYGRAPH_AUTH_TOKEN is not defined.");
if (!endpoint) throw new Error("HYGRAPH_ENDPOINT is not defined.");

const options: HygraphOptions = {
  key: authToken,
  uri: endpoint,
};

const runner: IRunner = new Runner();
const schemav1: ISchema = new SchemaV1(options, "schemav1");

// App
await runner.runAsync([schemav1]);
