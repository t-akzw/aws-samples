/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLineData = /* GraphQL */ `
  query GetLineData($id: ID!) {
    getLineData(id: $id) {
      id
      label
      data
      createdAt
      updatedAt
    }
  }
`;
export const listLineDatas = /* GraphQL */ `
  query ListLineDatas(
    $filter: ModelLineDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLineDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listDatas = /* GraphQL */ `
  query ListDatas(
    $filter: ModelLineDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLineDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        data
      }
      nextToken
    }
  }
`;
export const listLabels = /* GraphQL */ `
  query ListLabels(
    $filter: ModelLineDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLineDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        label
      }
      nextToken
    }
  }
`;