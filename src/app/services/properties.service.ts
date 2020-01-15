import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from '../interfaces/property';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  // TABLEAU DES BIENS (IMMOBLIERS)
  properties: Property[] ;

  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  // EMETTRE LES BIENS ET L'IMMOBLIERS
  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() {}

  // CREATION D'UN BIEN
  createProperty(property: Property) {
    this.properties.push(property);
  }

  // SUPPRESSION D'UN BIEN
  deleteProperty(index)  {
    this.properties.splice(index, 1);
    this.emitProperties();                  // mis à jour de tableau aprés la suppression d'un element
  }

  // MODIFICATION D'UN BIEN
  updateProperty(property: Property, index) {
    this.properties[index] = property;
    this.emitProperties();
  }

}
