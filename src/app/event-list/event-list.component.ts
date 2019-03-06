import {Component, OnInit} from '@angular/core';
import {EventService} from "../services/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];
  public id: number;

  constructor(private eventsService: EventService, private router: Router, private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
    });
    this.eventsService.getEventsByUno(this.id).subscribe(data => {
      this.events = data;
    });
  }

  onNewEvent() {
    this.router.navigate(['/events']);
  }

}
