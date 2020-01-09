import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

   // TABLEAU DES BIENS (IMMOBLIERS)
   properties = [];

  constructor(private propertiesService: PropertiesService) {

  }

  ngOnInit() {
    this.propertiesService.getProperties().subscribe(
      (data: any) => {
        this.properties = data;
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }

  ngOnDestroy() {
    
  }

}
