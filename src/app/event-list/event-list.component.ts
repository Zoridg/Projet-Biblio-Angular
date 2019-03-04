import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {EventService} from "../services/event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: Event[];
  eventsSubscription: Subscription;

  constructor(private eventsService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventsSubscription = this.eventsService.eventsSubject.subscribe(
      (events: Event[]) => {
        this.events = events;
      }
    )
  }

  onNewEvent(){
    this.router.navigate(['/events']);
  }

  ngOnDestroy(){
    this.eventsSubscription.unsubscribe();
  }

}
