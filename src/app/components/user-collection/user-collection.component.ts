import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { GetFolder } from '../../store/actions/folder.actions';
import { selectCollection } from '../../store/selectors/collection.selector';
import { selectFolder } from '../../store/selectors/folder.selector';

@Component({
  selector: 'discogs-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss']
})
export class UserCollectionComponent implements OnInit {
  collection$ = this._store.pipe(select(selectCollection));
  folder$ = this._store.pipe(select(selectFolder));

  constructor(
    private _store: Store<IAppState>
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetFolder());
  }
}
