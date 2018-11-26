import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-biblio';

  constructor(){
    const config = {
      apiKey: "AIzaSyDnCAhFVE1Ttco_YWD_WNkcvD5Ly06_ols",
      authDomain: "biblio-5157d.firebaseapp.com",
      databaseURL: "https://biblio-5157d.firebaseio.com",
      projectId: "biblio-5157d",
      storageBucket: "biblio-5157d.appspot.com",
      messagingSenderId: "562891720870"
    };
    firebase.initializeApp(config);
  }
}
