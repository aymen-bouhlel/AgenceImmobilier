import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   // TABLEAU DES BIENS (IMMOBLIERS)
   properties = [
    {
      title: 'Ma super maison',
      category: 'Maison',
      sold: true,                 // POUR DIR VENDU (TRUE) OU A VENDRE (FALSE)
    },
    {
      title: 'Petite appertement',
      category: 'Appartement',
      sold: false,                 // POUR DIR VENDU (TRUE) OU A VENDRE (FALSE)
    },
    {
      title: 'Belle villa',
      category: 'Maison',
      sold: true,                 // POUR DIR VENDU (TRUE) OU A VENDRE (FALSE)
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

}
