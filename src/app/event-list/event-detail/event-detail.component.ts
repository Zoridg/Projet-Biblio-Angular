import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(private eventsService: EventService) { }

  ngOnInit() {
    this.event = this.eventsService.event;
  }

}
