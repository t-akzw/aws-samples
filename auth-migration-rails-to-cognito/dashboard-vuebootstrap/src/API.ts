/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLineDataInput = {
  id?: string | null,
  label: string,
  data: number,
};

export type ModelLineDataConditionInput = {
  label?: ModelStringInput | null,
  data?: ModelIntInput | null,
  and?: Array< ModelLineDataConditionInput | null > | null,
  or?: Array< ModelLineDataConditionInput | null > | null,
  not?: ModelLineDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLineDataInput = {
  id: string,
  label?: string | null,
  data?: number | null,
};

export type DeleteLineDataInput = {
  id?: string | null,
};

export type ModelLineDataFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  data?: ModelIntInput | null,
  and?: Array< ModelLineDataFilterInput | null > | null,
  or?: Array< ModelLineDataFilterInput | null > | null,
  not?: ModelLineDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateLineDataMutationVariables = {
  input: CreateLineDataInput,
  condition?: ModelLineDataConditionInput | null,
};

export type CreateLineDataMutation = {
  createLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLineDataMutationVariables = {
  input: UpdateLineDataInput,
  condition?: ModelLineDataConditionInput | null,
};

export type UpdateLineDataMutation = {
  updateLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLineDataMutationVariables = {
  input: DeleteLineDataInput,
  condition?: ModelLineDataConditionInput | null,
};

export type DeleteLineDataMutation = {
  deleteLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLineDataQueryVariables = {
  id: string,
};

export type GetLineDataQuery = {
  getLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLineDatasQueryVariables = {
  filter?: ModelLineDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLineDatasQuery = {
  listLineDatas:  {
    __typename: "ModelLineDataConnection",
    items:  Array< {
      __typename: "LineData",
      id: string,
      label: string,
      data: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLineDataSubscription = {
  onCreateLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLineDataSubscription = {
  onUpdateLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLineDataSubscription = {
  onDeleteLineData:  {
    __typename: "LineData",
    id: string,
    label: string,
    data: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
