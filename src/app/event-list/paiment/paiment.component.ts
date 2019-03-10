import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Payment} from '../../models/payment';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.css']
})
export class PaimentComponent implements OnInit {

  paimentForm: FormGroup;
  listGroup: FormGroup;
  paiment: Payment;
  participatesEvent: User[];
  receivers: User[];
  currentUser: User;
  receive: FormControl;
  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router,
              private eventsService: EventService,
              private paymentService: PaymentService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.receive = new FormControl();
    this.eventsService.getUsersForAnEvent(this.eventsService.event.eno).subscribe(data => {
      this.participatesEvent = data;
    });
    this.paimentForm = this.formBuilder.group({
      lib: ['', Validators.required],
      amount: ['', Validators.required],
    });
    this.listGroup = this.formBuilder.group({
      select: ''
    });

    this.receive.valueChanges.subscribe(values => {
      this.receivers = values;
    });
    this.currentUser = this.authService.user;
    console.log(this.currentUser);
    console.log(this.participatesEvent);
  }

  public onSavePaiment() {
    if (this.receivers == null || this.receivers.length === 0) {
      this.errorMessage = 'Vous n\'avez pas choisit de bénéficiaire';
    } else {
      const lib = this.paimentForm.get('lib').value;
      const amount = this.paimentForm.get('amount').value;
      this.paiment = new Payment(this.authService.user.uno, this.eventsService.event.eno, lib, amount, this.receivers);
      this.paymentService.addPayment(this.paiment).subscribe();
      this.router.navigate(['events/view/', this.eventsService.event.eno]);
    }
  }

}
