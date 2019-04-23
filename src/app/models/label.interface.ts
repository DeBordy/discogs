import { IImage } from './image.interface.ts';
import { IExtraLabel } from './extra-label.interface.ts';

export interface ILabel {
  id: number;
  contact_info: string;
  data_quality: string;
  name: string;
  profile: string;
  release_url: string;
  resource_url: string;
  uri: string;
  urls: string[];
  images: IImage[];
  parent_label: IExtraLabel;
  sublabels: IExtraLabel[];
}
