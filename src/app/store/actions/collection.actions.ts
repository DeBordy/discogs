import { Action } from '@ngrx/store';

import { ICollection } from '../../models/collection.interface';

export enum ECollectionActions {
  GetCollection = '[Collection] Get Collection',
  GetCollectionSuccess = '[Collection] Get Collection Success',
  GetCollectionFailed = '[Collection] Get Collection Failed',
  GetRandomCollection = '[Collection] Get Random Collection',
  GetRandomCollectionSuccess = '[Collection] Get Random Collection Success',
  GetRandomCollectionFailed = '[Collection] Get Random Collection Failed',
}

export class GetCollection implements Action {
  public readonly type = ECollectionActions.GetCollection;
  constructor(public payload: string) {}
}

export class GetCollectionSuccess implements Action {
  public readonly type = ECollectionActions.GetCollectionSuccess
  constructor(public payload: ICollection) {}
}

export class GetRandomCollection implements Action {
  public readonly type = ECollectionActions.GetRandomCollection;
}

export class GetRandomCollectionSuccess implements Action {
  public readonly type = ECollectionActions.GetRandomCollectionSuccess
  constructor(public payload: ICollection) {}
}

export type CollectionActions = GetCollection | GetCollectionSuccess | GetRandomCollection | GetRandomCollectionSuccess;
