import { Action } from '@ngrx/store';

import { IFolder } from '../../models/folder.interface';

export enum EFolderActions {
  GetFolder = '[Folder] Get Folder',
  GetFolderSuccess = '[Folder] Get Folder Success',
  GetFolderFailed = '[Folder] Get Folder Failed',
}

export class GetFolder implements Action {
  public readonly type = EFolderActions.GetFolder;
}

export class GetFolderSuccess implements Action {
  public readonly type = EFolderActions.GetFolderSuccess
  constructor(public payload: IFolder) {}
}

export type FolderActions = GetFolder | GetFolderSuccess;
