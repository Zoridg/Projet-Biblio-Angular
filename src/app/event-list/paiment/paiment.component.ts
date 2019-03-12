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
  listReceiver: FormGroup;
  listGiver: FormGroup;
  paiment: Payment;
  giver: User;
  participatesEvent: User[];
  receivers: User[];
  receive: FormControl;
  give: FormControl;
  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router,
              private eventsService: EventService,
              private paymentService: PaymentService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.receive = new FormControl();
    this.give = new FormControl();
    this.eventsService.getUsersForAnEvent(this.eventsService.event.eno).subscribe(data => {
      this.participatesEvent = data;
    });
    this.paimentForm = this.formBuilder.group({
      lib: ['', Validators.required],
      amount: ['', Validators.required],
    });
    this.listReceiver = this.formBuilder.group({
      select: ''
    });

    this.listGiver = this.formBuilder.group({
      select: ''
    });

    this.receive.valueChanges.subscribe(values => {
      this.receivers = values;
    });

    this.give.valueChanges.subscribe(value => {
      this.giver = value;
    });
  }

  public onSavePaiment() {
    if (this.receivers == null || this.receivers.length === 0) {
      this.errorMessage = 'Vous n\'avez pas choisit de bénéficiaire';
    } else {
      const lib = this.paimentForm.get('lib').value;
      const amount = this.paimentForm.get('amount').value;
      this.paiment = new Payment(this.giver.uno, this.eventsService.event.eno, lib, amount, this.receivers);
      this.paymentService.addPayment(this.paiment).subscribe(() => {
        this.router.navigate(['events/view/', this.eventsService.event.eno]);
      });
    }
  }
}
