import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Refund} from '../models/refund';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  public getResolvedAccount(eno: number): Observable<Refund[]> {
    return this.httpClient.get<Refund[]>(`${environment.api.url}/account/${eno}`, httpOptions);
  }
}
