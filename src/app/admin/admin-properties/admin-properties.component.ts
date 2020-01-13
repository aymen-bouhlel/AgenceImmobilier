import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  propertiesForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initPropertiesForm();
  }

  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group({
      title: '',
      category: '',
      surface: '',
      rooms: '',
      description: '',
      price: '',
      sold: ''
    });
  }

  onSubmitPropertiesForm() {
    // console.log(form.value);
    console.log(this.propertiesForm.value);
  }

}
