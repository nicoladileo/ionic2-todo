import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  employees: any;
  username = "";
  constructor(public navCtrl: NavController) {
    this.employees = [
      {picture: 'http://placehold.it/75', name: 'Bob', title: 'Tutorial guy', show: false},
      {picture: 'http://placehold.it/75', name: 'Tom', title: 'Some guy', show: false},
      {picture: 'http://placehold.it/75', name: 'Jack', title: 'Another guy', show: false}
    ];
  }

  handleClick(e:any) {
    console.log("Click on item " + e.name);
  }
}
