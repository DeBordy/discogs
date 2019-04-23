import { IPagination } from './pagination.interface.ts';
import { ICollectionRelease } from './collection-release.interface.ts';

export interface ICollection {
  pagination: IPagination;
  releases: ICollectionRelease[];
}
