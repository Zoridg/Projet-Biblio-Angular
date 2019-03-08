import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Event} from '../models/event';
import {User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _event: Event;

  constructor(private httpClient: HttpClient) {
  }

  public createNewEvent(id: number, event: Event): Observable<Event> {
    return this.httpClient.post<Event>(`${environment.api.url}/event/${id}`, event, httpOptions);
  }

  public getEventsByUno(id: number): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${environment.api.url}/event/participate/${id}`, httpOptions);
  }

  public getUsersForAnEvent(id: number): Observable<User[]>{
    return this.httpClient.get<User[]>(`${environment.api.url}/participate/${id}`, httpOptions);
  }

  public get event() {
    return this._event;
  }

  public set event(event: Event) {
    this._event = event;
  }
}
