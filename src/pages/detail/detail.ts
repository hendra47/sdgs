import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import list from "../../data/data";
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  detail:any;
  icon:any;
  arrColor:any=[];
  pilihan:any="target";
  constructor( private platform: Platform,private statusBar: StatusBar,private _zone: NgZone,   public navCtrl: NavController, public navParams: NavParams) {
    this._zone.run(() =>{
      this.detail=this.navParams.get("item");
      this.icon="assets/imgs/sdgc"+this.detail.id+".png"; 
      this.arrColor=list;       
    });
    let color = this.navParams.get("item").color;
    this.platform.ready().then(() => {
          this.statusBar.backgroundColorByHexString(color);
    });
  }
  ionViewWillLeave(){
    this.statusBar.backgroundColorByHexString("#00ADEE");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  goBack() {
    this.navCtrl.pop();
  }

}
