import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service';
import {Event} from '../../../models/event';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit {

  event: Event;

  constructor(private eventsService: EventService) { }

  ngOnInit() {
    this.event = this.eventsService.event;
  }

}
