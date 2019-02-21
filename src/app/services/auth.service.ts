import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor(private httpClient: HttpClient) {
  }

  createNewUser(user): Observable<User> {
    return this.httpClient.post<User>(`${environment.api.url}/users`, user, httpOptions);
  }

  signInUser(email: string, password: string) : Observable<User>{
    return this.httpClient.get<User>(`${environment.api.url}/users/exists`,
      {
        params: {
          mail: email,
          pwd: password
        }
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

  getUser(){
    return this.user;
  }

  setUser(user){
    this.user = user;
  }
}
