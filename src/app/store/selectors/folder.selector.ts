import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IFolderState } from '../state/folder.state';

const folderState = (state: IAppState) => state.folder;

export const selectFolder = createSelector(
  folderState,
  (state: IFolderState) => state
);

export let selectFolderCount = createSelector(
  folderState,
  (state: IFolderState) => state.isFetching ? 1 : state.folder.count
);
