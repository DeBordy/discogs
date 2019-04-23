import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state.ts';
import { folderReducers } from './folder.reducers.ts';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  folder: folderReducers
};
