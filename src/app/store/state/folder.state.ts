import { IFolder } from '../../models/folder.interface';

export interface IFolderState {
  folder: IFolder;
  isFetching: boolean;
};

export const initialFolderState: IFolderState = {
  folder: null,
  isFetching: false,
};
