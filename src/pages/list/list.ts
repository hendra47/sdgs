import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import list from "../../data/data";
import { ReducerProvider } from '../../providers/reducer/reducer';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  arrList:any=[];
  constructor(public service :ReducerProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.arrList=list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  next(item){
    this.service.setID(item.id);
    this.navCtrl.push("DetailPage",{item:item},{animate:true,animation:'transition',duration:700,direction:'forward'})

  }

}
