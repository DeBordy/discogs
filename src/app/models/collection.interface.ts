import { IPagination } from './pagination.interface';
import { ICollectionRelease } from './collection-release.interface';

export interface ICollection {
  pagination: IPagination;
  releases: ICollectionRelease[];
}
