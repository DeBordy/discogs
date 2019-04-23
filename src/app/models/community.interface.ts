import { IUser } from './user.interface';
import { IRating } from './rating.interface';

export interface ICommunity {
  have: number;
  statsus: string;
  want: number;
  contributors: IUser[];
  rating: IRating;
  submitter: IUser;
}
