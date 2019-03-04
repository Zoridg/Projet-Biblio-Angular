import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  createNewUser(user): Observable<User> {
    return this.httpClient.post<User>(`${environment.api.url}/users`, user, this.httpOptions);
  }

  signInUser(mail: string, pwd: string) : Observable<User>{
    this.user.mail = mail;
    this.user.pwd = pwd;
    const options = {
      ...this.httpOptions,
      params: {
        mail: mail,
        pwd: pwd
      }
    };
    return this.httpClient.get<User>(`${environment.api.url}/users/exists`, options);
  }

  signOutUser() {
    localStorage.clear();
  }

  getUser(){
    return this.user;
  }

  setUser(user){
    this.user = user;
  }
}
