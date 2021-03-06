import { ICollectionState } from '../state/collection.state';
import { ECollectionActions, CollectionActions } from '../actions/collection.actions';

export function collectionReducers(
  state: ICollectionState,
  action: CollectionActions
): ICollectionState {
  switch (action.type) {
    case ECollectionActions.GetCollection: {
      return {
        ...state,
        key: action.payload,
        isFetching: true,
      };
    }
    case ECollectionActions.GetCollectionSuccess: {
      return {
        ...state,
        collection: {
          ...action.payload,
        },
        isFetching: false,
      };
    }
    case ECollectionActions.GetRandomCollection: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ECollectionActions.GetRandomCollectionSuccess: {
      return {
        ...state,
        collection: {
          ...action.payload,
        },
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
