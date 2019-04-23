import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state.ts';
import { IFolderState } from '../state/folder.state.ts';

const folderState = (state: IAppState) => state.folder;

export const selectFolder = createSelector(
  folderState,
  (state: IFolderState) => state.folder
);
