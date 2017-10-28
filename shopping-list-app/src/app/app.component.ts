import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAReQF7sK3cgv9coUn-OKK22ktvf3fvJzg",
      authDomain: "shopping-list-app-5a2c2.firebaseapp.com"
    });
  }

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
