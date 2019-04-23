import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import {
  ECollectionActions,
  GetCollection,
  GetCollectionSuccess,
  GetRandomCollection,
  GetRandomCollectionSuccess,
} from '../actions/collection.actions';
import { ICollection } from '../../models/collection.interface';
import { CollectionService } from '../../services/collection.service';
import { IAppState } from '../state/app.state';
import { selectFolderCount } from '../selectors/folder.selector';
import {selectCollection} from "../selectors/collection.selector";

@Injectable()
export class CollectionEffects {
  @Effect()
  getCollection$ = this._actions$.pipe(
    ofType<GetCollection>(ECollectionActions.GetCollection),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectCollection))),
    switchMap(([key, collection]) => {
      const url = collection.collection.pagination.urls[key];
      const page = new URL(url).searchParams.get('page');
      return this._collectionService.getCollection(page);
    }),
    switchMap((collectionHttp: ICollection) => of(new GetCollectionSuccess(collectionHttp)))
  );

  @Effect()
  getRandomCollection$ = this._actions$.pipe(
    ofType<GetRandomCollection>(ECollectionActions.GetRandomCollection),
    switchMap(() => this._store.pipe(select(selectFolderCount))),
    switchMap((count) => this._collectionService.getCollection(Math.round(Math.random() * count))),
    switchMap((collectionHttp: ICollection) => of(new GetRandomCollectionSuccess(collectionHttp)))
  );

  constructor(
    private _collectionService: CollectionService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
