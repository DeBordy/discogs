import { IExtraArtist } from './extra-artist.interface';
import { IImage } from './image.interface';
import { ITrack } from './track.interface';
import { IVideo } from './video.interface';

export interface IMaster {
  id: number;
  data_quality: string;
  genres: string[];
  lowest_price: number;
  main_release: number;
  main_release_url: string;
  most_recent_release: number;
  most_recent_release_url: string;
  notes: string;
  num_for_sale: number;
  resource_url: string;
  styles: string[];
  title: string;
  uri: string;
  versions_url: string;
  year: number;
  artist: IExtraArtist[];
  images: IImage[];
  tracklist: ITrack[];
  videos: IVideo[]
}
