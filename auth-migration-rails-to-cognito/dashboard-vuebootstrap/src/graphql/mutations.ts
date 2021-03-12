/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLineData = /* GraphQL */ `
  mutation CreateLineData(
    $input: CreateLineDataInput!
    $condition: ModelLineDataConditionInput
  ) {
    createLineData(input: $input, condition: $condition) {
      id
      label
      data
      createdAt
      updatedAt
    }
  }
`;
export const updateLineData = /* GraphQL */ `
  mutation UpdateLineData(
    $input: UpdateLineDataInput!
    $condition: ModelLineDataConditionInput
  ) {
    updateLineData(input: $input, condition: $condition) {
      id
      label
      data
      createdAt
      updatedAt
    }
  }
`;
export const deleteLineData = /* GraphQL */ `
  mutation DeleteLineData(
    $input: DeleteLineDataInput!
    $condition: ModelLineDataConditionInput
  ) {
    deleteLineData(input: $input, condition: $condition) {
      id
      label
      data
      createdAt
      updatedAt
    }
  }
`;
