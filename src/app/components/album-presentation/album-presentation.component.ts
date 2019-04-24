import { Component, OnInit, Input } from '@angular/core';

import { ICollectionState } from '../../store/state/collection.state';
import { IFolderState } from '../../store/state/folder.state';

@Component({
  selector: 'discogs-album-presentation',
  templateUrl: './album-presentation.component.html',
  styleUrls: ['./album-presentation.component.scss']
})
export class AlbumPresentationComponent implements OnInit {
  @Input()
  collection: ICollectionState;
  @Input()
  folder: IFolderState;

  constructor() { }

  ngOnInit() {}

  isLoading() {
    return !this.folder.isFetching && !this.collection.isFetching;
  }
}
