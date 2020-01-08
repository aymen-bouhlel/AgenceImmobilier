import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Agence Immoblier';

  isDisable = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('Hello world');
    this.isDisable = false;
  }

}
