import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Event} from '../models/event';
import {User} from '../models/user';
import {Payment} from '../models/payment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  constructor(private httpClient: HttpClient) {
  }

  public getPaymentByUno(eno: number): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(`${environment.api.url}/payment/event/${eno}`, httpOptions);
  }

  public addPayment(payment: Payment){
    return this.httpClient.post<Event>(`${environment.api.url}/payment`, payment, httpOptions);
  }
}