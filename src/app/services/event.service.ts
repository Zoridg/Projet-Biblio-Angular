import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [];
  eventsSubject = new Subject<Event[]>();

  constructor(private httpClient: HttpClient){
    // this.getEventsByUno(localStorage.getItem("uno"));
  }

  emitEvents(){
    this.eventsSubject.next(this.events);
  }

  addEvent(id: number, event: Event) : Observable<Event>{
    return this.httpClient.post<Event>(`${environment.api.url}/event/${id}`, event, httpOptions);
  }

  getEventsByUno(id: number): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${environment.api.url}/event/participate/${id}`, httpOptions);
  }

  createNewEvent(event: Event){
    this.events.push(event);
    // this.addEvent(localStorage.getItem("uno"), event);
    this.emitEvents();
  }
}
