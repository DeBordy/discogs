import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { ICollectionState } from '../../store/state/collection.state';
import { IFolderState } from '../../store/state/folder.state';
import { GetCollection, GetRandomCollection } from '../../store/actions/collection.actions';

@Component({
  selector: 'discogs-album-navigation',
  templateUrl: './album-navigation.component.html',
  styleUrls: ['./album-navigation.component.scss']
})
export class AlbumNavigationComponent implements OnInit {
  @Input()
  collection: ICollectionState;
  @Input()
  folder: IFolderState;

  constructor(
    private _store: Store<IAppState>
  ) {}

  ngOnInit() {}

  randomizeRelease() {
    this._store.dispatch(new GetRandomCollection());
  }

  fetchRelease(key) {
    if (!this.isAvailable(key)) return
    this._store.dispatch(new GetCollection(key));
  }

  getClasses(key) {
    return {
      na: !this.isAvailable(key)
    };
  }

  isAvailable(key) {
    return !this.folder.isFetching &&
      !this.collection.isFetching &&
      (key === 'random' || this.collection.collection.pagination.urls[key]);
  }
}
