import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import fact from "../../data/fact";
import { ReducerProvider } from '../../providers/reducer/reducer';
/**
 * Generated class for the FactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fact',
  templateUrl: 'fact.html',
})
export class FactPage {
  list:any=[];
  constructor(public service :ReducerProvider,public navCtrl: NavController, public navParams: NavParams) {
    let ID = this.service.getId();
    this.list = fact.filter(function (el) {
      return el.id == ID;
    });
    if(this.list.length > 0){
      this.list= this.list[0].list;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactPage');
  }

}
