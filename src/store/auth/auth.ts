import { User } from './user';

export interface Auth {
  isAuthenticated: boolean;
  token: string;
  user: User;
}
