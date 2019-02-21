import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

}
