import {User} from './user';

export interface Refund {
  giver: User;
  receiver: User;
  amount: number;
}
