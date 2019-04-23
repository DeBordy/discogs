import { IUser } from './user.interface.ts';
import { IRating } from './rating.interface.ts';

export interface ICommunity {
  have: number;
  statsus: string;
  want: number;
  contributors: IUser[];
  rating: IRating;
  submitter: IUser;
}
