import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EFolderActions, GetFolder, GetFolderSuccess } from '../actions/folder.actions.ts';

@Injectable()
export class FolderEffects {
  @Effect()
  getFolder$ = this._actions$.pipe(
    ofType<GetFolder>(EFolderActions.GetFolder),
    switchMap(() => this._folderService.getFolder()),
    switchMap((folderHttp: IFolderHttp) => of(new GetFolderSuccess(folderHttp.folder)))
  );

  constructor(
    private _folderService: FolderService,
    private _actions$: Actions
  ) {}
}
