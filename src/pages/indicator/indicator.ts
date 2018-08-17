import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import indicator from "../../data/indicator";
import { ReducerProvider } from '../../providers/reducer/reducer';

/**
 * Generated class for the IndicatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-indicator',
  templateUrl: 'indicator.html',
})
export class IndicatorPage {
  list:any=[];
  constructor(public service :ReducerProvider,public navCtrl: NavController, public navParams: NavParams) {
    let ID = this.service.getId();
    this.list = indicator.filter(function (el) {
      return el.id == ID;
    });
    if(this.list.length > 0){
      this.list= this.list[0].list;
    }
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicatorPage');
  }

}
