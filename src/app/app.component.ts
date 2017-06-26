import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe'

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDMTdRDourY8OKhxouypIplLyyAfqhQzG8",
      authDomain: "ng-recipe-book-a5070.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
