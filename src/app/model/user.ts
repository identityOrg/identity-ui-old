import {Authority} from '../security/authority';

export interface User {
  username: string;
  status: string;
  creationDate: Date;
  expiryDate: Date;
  passwordExpiryDate: Date;
  admin: boolean;
  firstName: string;
  lastName: string;
  authorities: Authority[];
}
