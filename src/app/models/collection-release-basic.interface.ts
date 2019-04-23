import { IExtraArtist } from './extra-artist.interface';
import { IFormat } from './format.interface';
import { IExtraLabel } from './extra-label.interface';

export interface ICollectionReleaseBasic {
  id: number;
  cover_image: string;
  master_id: number;
  master_url: string;
  resource_url: string;
  title: string;
  thumb: string;
  year: number;
  artists: IExtraArtist[];
  formats: IFormat[];
  labels: IExtraLabel[];
}
