import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    // CONFIGURATION AVEC FIREBASE
    const firebaseConfig = {
      apiKey: 'AIzaSyCCMikJv7TPJbgosq7IfBZyU1YxaAIjyuU',
      authDomain: 'monagence-f2bba.firebaseapp.com',
      databaseURL: 'https://monagence-f2bba.firebaseio.com',
      projectId: 'monagence-f2bba',
      storageBucket: 'monagence-f2bba.appspot.com',
      messagingSenderId: '730872499834',
      appId: '1:730872499834:web:eadcfc173923c5385c35c3'
    };
    firebase.initializeApp(firebaseConfig);
  }

}
