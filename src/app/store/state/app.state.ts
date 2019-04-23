import { RouterReducerState } from '@ngrx/router-store';

import { IFolderState, initialFolderState } from './folder.state.ts';

export interface IAppState {
  router?: RouterReducerState;
  folder: IFolderState;
}

export const initialAppState: IAppState = {
  folder: initialFolderState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
