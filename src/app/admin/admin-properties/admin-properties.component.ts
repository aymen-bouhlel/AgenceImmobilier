import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;
  propertiesSubscription: Subscription;
  properties: any[] = [];

  constructor( private formBuilder: FormBuilder,  private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.initPropertiesForm();
    this.propertiesService.propertiesSubject.subscribe(
      (data) => {
        this.properties = data;
      }
    );
    this.propertiesService.emitProperties();
  }

  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      price: ['', Validators.required],
      sold: ''
    });
  }

  onSubmitPropertiesForm() {
    const newProperty = this.propertiesForm.value;
    this.propertiesService.createProperty(newProperty);
    $('#propertiesFormModal').modal('hide');
  }

  // REINITIALISER LA FORMULAIRE
  resetForm() {
    this.propertiesForm.reset();
  }

  // SUPPRIMER UN BIEN
  onDeleteProperty(index) {
    this.propertiesService.deleteProperty(index);
  }

}
