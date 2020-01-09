import { Injectable } from '@angular/core';

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

  constructor() { }

  getProperties() {
    return new Promise(
      (resolve, reject) => {
        if (this.properties && this.properties.length > 0) {
          resolve(this.properties);
        } else {
          const error = new Error('Properties does not exist or is empty!');
          reject(error);
        }
      }
    );
  }

}
