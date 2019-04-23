import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { IAppState } from '../state/app.state';
import { folderReducers } from './folder.reducers';
import { collectionReducers } from './collection.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  collection: collectionReducers,
  folder: folderReducers,
};
