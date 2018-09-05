import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
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
  data:any=[];
  _param:any;
  constructor(public events: Events,public service :ReducerProvider,public navCtrl: NavController, public navParams: NavParams) {
    let ID = this.service.getId();
    
    this.data = indicator.filter(function (el) {
      return el.id == ID;
    });
    if(this.data.length > 0){
      this.list= this.data[0].list;
    }

    events.subscribe('kirim:data', (item) => {
      console.log("item",item);
      if(item.id){
        this.list = this.data[0].list.filter(function (el) {
          return el.parent == item.id;
        });
      }
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndicatorPage');
  }
  _next(item){
    this.events.publish('kirim:indicator', item);
    this.navCtrl.parent.select(2);
  }

}
