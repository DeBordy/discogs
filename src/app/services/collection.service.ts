import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICollection } from '../models/collection.interface';

@Injectable()
export class CollectionService {
  collectionUrl = `https://api.discogs.com/users/ausamerika/collection/folders/0/releases?per_page=1`;

  constructor(
    private _http: HttpClient
  ) { }

  getCollection(page): Observable<ICollection> {
    return this._http.get<ICollection>(`${this.collectionUrl}&page=${page}`);
  }
}
