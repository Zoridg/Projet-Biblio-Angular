import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../services/event.service';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {createUrlResolverWithoutPackagePrefix} from '@angular/compiler';
import {Participate} from '../../../models/participate';
import {ParticipateService} from '../../../services/participate.service';

@Component({
  selector: 'app-event-participate',
  templateUrl: './event-participate.component.html',
  styleUrls: ['./event-participate.component.css']
})
export class EventParticipateComponent implements OnInit {

  private users: User[];
  private isFake: boolean;
  private addEvent: boolean;
  public participateForm: FormGroup;
  public participation: Participate;
  public errorMessage: string;

  constructor(private eventsService: EventService,
              private authService: AuthService,
              private userService: UserService,
              private participateService: ParticipateService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.isFake = false;
    this.addEvent = false;
    this.participation = {
      eno: this.eventsService.event.eno,
      uno: null,
      hasright: null,
    } as Participate;
    this.eventsService.getUsersForAnEvent(this.eventsService.event.eno).subscribe(data => {
      this.users = data;
    });
    this.participateForm = this.formBuilder.group({
      pseudo: '',
      mail: '',
    });
  }

  public showAddEvent() {
    this.addEvent = !this.addEvent;
  }

  public changeFake() {
    this.isFake = !this.isFake;
  }

  onSubmitParticipate() {
    if (this.isFake) {
      const pseudo = this.participateForm.get('pseudo').value;
      const user = {
        pseudo: pseudo
      } as User;
      this.authService.createNewUser(user).subscribe(data => {
        this.participation.uno = data.uno;
        this.participation.hasright = 0;
        this.participateService.createNewParticipation(this.participation).subscribe();
        this.users.push(data);
      });
    } else {
      const mail = this.participateForm.get('mail').value;
      this.userService.getUserByMail(mail).subscribe(
        data => {
          this.participation.uno = data.uno;
          this.participation.hasright = 1;
          if (!this.alreadyParticipate(data.uno)) {
            this.participateService.createNewParticipation(this.participation).subscribe();
            this.users.push(data);
          }else{
            this.errorMessage = 'Utilisateur déjà participant';
          }
        },
        error => {
          if (error.status === 404) {
            this.errorMessage = 'Utilisateur inexistant';
          }
        });
    }
  }

  public alreadyParticipate(uno: number): boolean {
    return this.users.some(user => user.uno === uno);
  }
}
