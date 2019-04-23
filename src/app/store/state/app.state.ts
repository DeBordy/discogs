import { RouterReducerState } from '@ngrx/router-store';

import { IFolderState, initialFolderState } from './folder.state';
import { ICollectionState, initialCollectionState } from "./collection.state";

export interface IAppState {
  router?: RouterReducerState;
  folder: IFolderState;
  collection: ICollectionState
}

export const initialAppState: IAppState = {
  folder: initialFolderState,
  collection: initialCollectionState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
