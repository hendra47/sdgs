import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import target from "../../data/target";
import { ReducerProvider } from '../../providers/reducer/reducer';

/**
 * Generated class for the TargetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-target',
  templateUrl: 'target.html',
})
export class TargetPage {
  list:any=[];
  constructor(public events: Events,public service :ReducerProvider,public navCtrl: NavController, public navParams: NavParams) {
   
    let ID = this.service.getId();
    this.list = target.filter(function (el) {
      return el.id == ID;
    });
    if(this.list.length > 0){
      this.list= this.list[0].list;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetPage');
  }

  _next(item){
    this.events.publish('kirim:data', item);
    this.navCtrl.parent.select(1);
  }

}
