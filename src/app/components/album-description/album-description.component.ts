import { Component, OnInit, Input } from '@angular/core';

import { ICollectionState } from '../../store/state/collection.state';
import { IFolderState } from '../../store/state/folder.state';
import {ICollectionRelease} from "../../models/collection-release.interface";
import {ICollectionReleaseBasic} from "../../models/collection-release-basic.interface";
import {IExtraArtist} from "../../models/extra-artist.interface";
import {IFormat} from "../../models/format.interface";

@Component({
  selector: 'discogs-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.scss']
})
export class AlbumDescriptionComponent implements OnInit {
  @Input()
  collection: ICollectionState;
  @Input()
  folder: IFolderState;

  constructor() { }

  ngOnInit() {}

  isLoading(): boolean {
    return !this.folder.isFetching && !this.collection.isFetching;
  }

  getArtists(): IExtraArtist[] {
    try {
      return this.getBasicInformation().artists;
    } catch (e) {
      return [];
    }
  }

  getFormats(): IFormat[] {
    try {
      return this.getBasicInformation().formats;
    } catch (e) {
      return [];
    }
  }

  getBasicInformation(): ICollectionReleaseBasic | {} {
    try {
      return this.getCurrentRelease().basic_information || {};
    } catch (e) {
      return {};
    }
  }

  getCurrentRelease(): ICollectionRelease | {} {
    try {
      return this.collection.collection.releases[0] || {};
    } catch (e) {
      return {};
    }
  }
}
