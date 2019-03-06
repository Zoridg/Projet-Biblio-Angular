import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  createNewUser(user): Observable<User> {
    return this.httpClient.post<User>(`${environment.api.url}/user`, user, this.httpOptions);
  }

  signInUser(mail: string, pwd: string): Observable<User> {
    return this.httpClient.post<User>(`${environment.api.url}/user/exist`, {
      mail: mail,
      pwd: pwd
    } as User, this.httpOptions);
  }

  signOutUser() {
    localStorage.removeItem('uno');
    this.router.navigate(['/']);
  }

  onAuthStateChanged(){

  }
}
