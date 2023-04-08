import { GraphQLClient } from "graphql-request";

interface IQueryService {
  queryAsync<T>(query: string): Promise<T>;
}

class QueryService implements IQueryService {
  private _client: GraphQLClient;

  constructor() {
    const uri = process.env.HYGRAPH_CONTENT_URI;

    if (!uri) throw new Error("HYGRAPH_CONTENT_URI variable is not defined.");

    this._client = new GraphQLClient(uri);
  }

  async queryAsync<T>(query: string): Promise<T> {
    const data = await this._client.request<T>(query);
    return data;
  }
}

export default new QueryService() as IQueryService;
