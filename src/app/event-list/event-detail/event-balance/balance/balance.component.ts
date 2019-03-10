import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../../../services/event.service';
import {AccountService} from '../../../../services/account.service';
import {Event} from '../../../../models/event';
import {Refund} from '../../../../models/refund';
import {PaymentService} from '../../../../services/payment.service';
import {Payment} from '../../../../models/payment';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public event: Event;
  public refunds: Refund[];
  public payment: Payment;

  // public chartType = 'horizontalBar';
  // public chartDatasets;
  // public chartLabels;
  // public chartColors;
  // public chartOptions: any = {
  //   responsive: true
  // };

  constructor(private router: Router,
              private eventsService: EventService,
              private accountService: AccountService,
              private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.event = this.eventsService.event;
    this.payment = this.paymentService.payment;
    this.accountService.getResolvedAccount(this.event.eno).subscribe(
      (data: Refund[]) => {
        this.refunds = data;
      });
  }

  public onBack() {
    this.router.navigate(['/events/view/', this.event.eno]);
  }
}
