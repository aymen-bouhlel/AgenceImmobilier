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

  // CREATION D' BIEN
  createProperty(property) {
    this.properties.push(property);
  }

  // SUPPRESSION D'UN BIEN
  deleteProperty(index)  {
    this.properties.splice(index, 1);
    this.emitProperties();                  // mis à jour de tableau aprés la suppression d'un element
  }

  // MODIFICATION D'UN BIEN
  updateProperty(property, index) {
    this.properties[index] = property;
    this.emitProperties();
  }

}
