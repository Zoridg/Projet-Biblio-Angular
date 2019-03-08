import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {Participate} from '../models/participate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ParticipateService {

  constructor(private httpClient: HttpClient) {
  }

  public createNewParticipation(participate: Participate): Observable<Participate> {
    return this.httpClient.post<Participate>(`${environment.api.url}/participate`, participate, httpOptions);
  }


}
