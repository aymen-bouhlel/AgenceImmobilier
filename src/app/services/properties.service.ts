import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

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

  propertiesSubject = new Subject<any[]>();

  constructor() { }

  // EMETTRE LES BIENS ET L'IMMOBLIERS
  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() {}

}
