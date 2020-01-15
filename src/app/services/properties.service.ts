import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from '../interfaces/property';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  // TABLEAU DES BIENS (IMMOBLIERS)
  properties: Property[] = [] ;

  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  // EMETTRE LES BIENS ET L'IMMOBLIERS
  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  // SAUVGARDER DANS LA BASE DE DONNÉES TOUS LES BIENS QUI SE TROUVENT DANS LE TABLEAU PROPERTIES
  saveProperties() {
    firebase.database().ref('/properties').set(this.properties);
  }

  // RECUPÉRER TOUS LES BIENS DEPUIS LA BD FIREBASE ET LE METTRE DANS LE TABLEAU PROPERTIES
  getProperties() {
    firebase.database().ref('/properties').on('value', (data) => {
      this.properties = data.val() ? data.val() : [];
      this.emitProperties();
    });
  }

  // CREATION D'UN BIEN
  createProperty(property: Property) {
    this.properties.push(property);
    this.saveProperties();
    this.emitProperties();
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
