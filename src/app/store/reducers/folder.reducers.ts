import { IFolderState } from '../state/folder.state';
import { EFolderActions, FolderActions } from '../actions/folder.actions';

export const folderReducers = (
  state: IFolderState,
  action: FolderActions
): IFolderState => {
  switch (action.type) {
    case EFolderActions.GetFolder: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case EFolderActions.GetFolderSuccess: {
      return {
        ...state,
        folder: {
          ...action.payload,
        },
        isFetching: false,
      };
    }
    default:
      return state;
  }
}
