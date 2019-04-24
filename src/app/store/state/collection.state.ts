import { ICollection } from '../../models/collection.interface';

export interface ICollectionState {
  collection: ICollection;
  key: string;
  isFetching: boolean;
};

export const initialCollectionState: ICollectionState = {
  collection: null,
  key: null,
  isFetching: false,
};
