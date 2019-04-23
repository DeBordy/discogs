import { IExtraArtist } from './extra-artist.interface';

export interface ITrack {
  duration: string;
  position: number;
  title: string;
  type_: string;
  extraartists: IExtraArtist[];
}
