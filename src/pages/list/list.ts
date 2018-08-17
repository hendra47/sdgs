import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import list from "../../data/data";

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  arrList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrList=list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
