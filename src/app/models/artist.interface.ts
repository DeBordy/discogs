import { IImage } from './image.interface.ts';
import { IMember } from './member.interface.ts';

export interface IArtist {
  id: number;
  data_quality: string;
  name: string;
  namevariations: string[];
  profile: string;
  release_url: string;
  resource_url: string;
  uri: string;
  urls: string[];
  images: IImage[];
  members: IMember[];
}
