import { ICollectionReleaseBasic } from './collection-release-basic.interface';

export interface ICollectionRelease {
  id: number;
  date_added: string;
  instance_id: number;
  rating: number;
  basic_information: ICollectionReleaseBasic;
}
