import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private title:string = 'Coding Exercise Angular 2+';
  private currentFilter;

  constructor() { }

  showFilter(event) {
    console.log(event);
    this.currentFilter = event;
  }
}
