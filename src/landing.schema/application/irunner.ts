import ISchema from "./ischema.js";

export interface IRunner {
  runAsync(schemas: ISchema[]): Promise<void>;
}
