import {Component, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Event} from '../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];

  constructor(private eventsService: EventService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.isConnected()) {
      this.eventsService.getEventsByUno(this.authService.user.uno).subscribe(data => {
        this.events = data;
      });
    }
  }

  onNewEvent() {
    this.router.navigate(['events/new']);
  }

  onViewEvent(event: Event) {
    this.eventsService.event = event;
    this.router.navigate(['events/view', event.eno]);
  }
}
