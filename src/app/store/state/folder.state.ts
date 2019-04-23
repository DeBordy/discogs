import { IFolder } from '../../app/models/folder.interface';

export interface IFolderState {
  folder: IFolder;
}

export const initialFolderState: IFolderState = {
  folder: null,
};
