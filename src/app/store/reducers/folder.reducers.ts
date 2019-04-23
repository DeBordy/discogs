import { initialFolderState, IFolderState } from '../state/folder.state.ts';
import { EFolderActions, FolderActions } from '../actions/folder.actions.ts';

export const folderReducers = (
  state: initialFolderState,
  action: FolderActions
): IFolderState => {
  switch (action.type) {
    case EFolderActions.GetFolderSuccess: {
      return {
        ...state,
        folder: action.payload,
      };
    }
    default:
      return state;
  }
}
