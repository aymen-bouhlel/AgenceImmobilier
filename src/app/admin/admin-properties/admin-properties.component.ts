import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitPropertiesForm(form: NgForm) {
    // console.log(form.value);
    const title = form.value['title'];
    console.log(title);
  }

}
