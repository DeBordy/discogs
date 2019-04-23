import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EFolderActions, GetFolder, GetFolderSuccess } from '../actions/folder.actions';
import { IFolder } from '../../models/folder.interface';
import { FolderService } from '../../services/folder.service';
import { IAppState } from '../state/app.state';
import { GetRandomCollection } from '../actions/collection.actions';

@Injectable()
export class FolderEffects {
  @Effect()
  getFolder$ = this._actions$.pipe(
    ofType<GetFolder>(EFolderActions.GetFolder),
    switchMap(() => this._folderService.getFolder()),
    switchMap((folderHttp: IFolder) => {
      this._store.dispatch(new GetRandomCollection())
      return of(new GetFolderSuccess(folderHttp))
    })
  );

  constructor(
    private _folderService: FolderService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
