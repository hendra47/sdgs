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
  tab1Root = "TargetPage";
  tab2Root = "IndicatorPage";
  tab3Root = "FactPage";
  constructor( private platform: Platform,private statusBar: StatusBar,private _zone: NgZone,   public navCtrl: NavController, public navParams: NavParams) {
  
    this._zone.run(() =>{
      this.detail=this.navParams.get("item");
      this.icon="assets/imgs/logos"+this.detail.id+".png"; 
      this.arrColor=list;       
    });
    let color = this.navParams.get("item").color;
    this.platform.ready().then(() => {
          this.statusBar.backgroundColorByHexString(color);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
