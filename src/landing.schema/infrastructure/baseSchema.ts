import { Client } from "@hygraph/management-sdk";
import { retry } from "ts-retry-promise";
import ISchema from "../application/ischema.js";
import Options from "./options.js";

export default abstract class BaseSchema implements ISchema {
  protected readonly _client: Client;

  constructor(options: Options, name: string) {
    this._client = new Client({
      authToken: options.key,
      endpoint: options.uri,
      name: name,
    });
  }

  async runAsync(): Promise<void> {
    try {
      this.apply();

      const response = await retry(
        async () => {
          try {
            return await this._client.run(true);
          } catch (error) {
            if (
              error instanceof Error &&
              error.message.startsWith(
                "Could not submit migration: There is already a migration with name:"
              )
            ) {
              return error.message;
            }
          }
        },
        {
          backoff: "EXPONENTIAL",
          retries: 5,
          timeout: 60000,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  abstract apply(): void;
}
