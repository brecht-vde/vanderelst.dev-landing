import { IRunner } from "../application/irunner.js";
import ISchema from "../application/ischema.js";

export default class Runner implements IRunner {
  async runAsync(schemas: ISchema[]): Promise<void> {
    for (const schema of schemas) {
      await schema.runAsync();
    }
  }
}
