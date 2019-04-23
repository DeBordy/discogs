import { ICollection } from '../../models/collection.interface';

export interface ICollectionState {
  collection: ICollection;
  isFetching: boolean;
}

export const initialCollectionState: ICollectionState = {
  collection: null,
  isFetching: false
};
