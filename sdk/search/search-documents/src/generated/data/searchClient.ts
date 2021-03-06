/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SearchClientContext } from "./searchClientContext";

class SearchClient extends SearchClientContext {
  // Operation groups
  documents: operations.Documents;

  /**
   * Initializes a new instance of the SearchClient class.
   * @param apiVersion Client Api Version.
   * @param endpoint The endpoint URL of the search service.
   * @param indexName The name of the index.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, apiVersion: string, endpoint: string, indexName: string, options?: coreHttp.ServiceClientOptions) {
    super(credentials, apiVersion, endpoint, indexName, options);
    this.documents = new operations.Documents(this);
  }
}

// Operation Specifications

export {
  SearchClient,
  SearchClientContext,
  Models as SearchModels,
  Mappers as SearchMappers
};
export * from "./operations";
