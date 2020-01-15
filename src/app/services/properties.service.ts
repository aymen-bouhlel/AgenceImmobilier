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
    this.saveProperties();
    this.emitProperties();                  // mis à jour de tableau aprés la suppression d'un element
  }

  // MODIFICATION D'UN BIEN
  updateProperty(property: Property, index) {
    // this.properties[index] = property;
    // this.saveProperties();
    // this.emitProperties();
    firebase.database().ref('/properties/' + index).update(property).catch(
      (error) => {
        console.log(error);
      }
    );
  }

  // UPLOAD D'IMAGE
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const uniqueId = Date.now().toString();
        const fileName = uniqueId + file.name;
        const upload = firebase.storage().ref().child('images/properties/' + fileName).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement...');
          },
          (error) => {
            console.error(error);
            reject(error);
          },
          () => {
            upload.snapshot.ref.getDownloadURL().then(
              (downloadUrl) => {
                resolve(downloadUrl);
              }
            );
          }
        );
      }
    );
  }

  // SUPPRESSION D'IMAGE (FILE)
  removeFile(fileLink: string) {
    if (fileLink) {
      const storageRef = firebase.storage().refFromURL(fileLink);
      storageRef.delete().then(
        () => {
          console.log('File deleted');
        }
      ).catch(
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
