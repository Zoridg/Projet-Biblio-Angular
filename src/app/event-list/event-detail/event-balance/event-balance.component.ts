import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../../../services/payment.service';
import {Payment} from '../../../models/payment';
import {Event} from '../../../models/event';
import {EventService} from '../../../services/event.service';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-balance',
  templateUrl: './event-balance.component.html',
  styleUrls: ['./event-balance.component.css']
})
export class EventBalanceComponent implements OnInit {

  private payments: Payment[];
  public step: number;

  constructor(private eventsService: EventService,
              private userService: UserService,
              private paymentService: PaymentService,
              private router: Router) {
  }

  ngOnInit() {
    this.paymentService.getPaymentByUno(this.eventsService.event.eno).subscribe(data => {
      this.payments = data;
    });
  }

  public addPayment() {
    this.router.navigate(['paiment/new']);
  }

  public showBalance(id: number) {
    this.router.navigate(['events/balance/', id]);
  }

  setStep(i) {
    this.step = i;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
