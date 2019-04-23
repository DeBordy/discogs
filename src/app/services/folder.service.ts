import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IFolder } from '../models/folder.interface';

@Injectable()
export class FolderService {
  folderUrl = `https://api.discogs.com/users/ausamerika/collection/folders/0`;

  constructor(private _http: HttpClient) { }

  getFolder(): Observable<IFolder> {
    return this._http.get<IFolder>(this.folderUrl);
  }
}
