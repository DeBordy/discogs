import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICollectionState } from '../state/collection.state';

const collectionState = (state: IAppState) => state.collection;

export const selectCollection = createSelector(
  collectionState,
  (state: ICollectionState) => state
);
