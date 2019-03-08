import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Event} from '../../models/event';
import {EventService} from '../../services/event.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;
  newEvent: Event;

  constructor(private formBuilder: FormBuilder, private eventService: EventService,
              private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isConnected();
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: '',
      date: ''
    });
  }

  public onSaveEvent() {
    const title = this.eventForm.get('title').value;
    const describe = this.eventForm.get('description').value;
    const dateEvent = this.eventForm.get('date').value;
    this.newEvent = new Event(title, describe, dateEvent);
    this.eventService.createNewEvent(this.authService.user.uno, this.newEvent).subscribe((data: Event) => {
      this.eventService.event = data;
      this.router.navigate(['events/view/', this.eventService.event.eno]);
    });
    this.router.navigate(['/books']);
  }
}
