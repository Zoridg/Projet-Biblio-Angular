import {User} from './user';

export class Payment {
  pno: number;
  uno: number;
  eno: number;
  lib: string;
  amount: number;
  datePay: Date;
  userReceivers: User[];
  giver: User;

  constructor(uno: number, eno: number, lib: string, amount: number, users: User[]) {
    this.uno = uno;
    this.eno = eno;
    this.lib = lib;
    this.amount = amount;
    this.userReceivers = users;
    this.datePay = new Date();
  }
}


