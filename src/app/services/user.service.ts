import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  public getUserByMail(mail: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.api.url}/user/mail/${mail}`, httpOptions);
  }

  public getUserByUno(uno: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.api.url}/user/${uno}`, httpOptions);
  }
}
