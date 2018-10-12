import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ModalController } from 'ionic-angular';
import list from "../../data/data";
import { StatusBar } from '@ionic-native/status-bar';
import { Store } from '@ngrx/store';

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
  subscription:any;
  subscription2:any;
  subscription3:any;
  arrColor:any=[];
  pilihan:any="target";
  data1:any;
  data2:any;
  data3:any;
  constructor(private store: Store<any>, public modalCtrl: ModalController,private platform: Platform,private statusBar: StatusBar,private _zone: NgZone,   public navCtrl: NavController, public navParams: NavParams) {
    this._zone.run(() =>{
      this.detail=this.navParams.get("item");
      // console.log(this.detail);
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

  cari() {
    let profileModal = this.modalCtrl.create("SearchPage", { userId: 8675309 });
    profileModal.present();
  }

  _subscribeRedux(){
    //asset subscribe
    this.subscription = this.store.select("dataReducer").subscribe((result:any)=>{
      // console.log(result.data);
      for (let index = 0; index < result.data.length; index++) {
        const res = result.data[index];
        if(this.detail.id==res.id){
          this.data1=res;
          // console.log(this.data1);
        }
      }
    });
    this.subscription2 = this.store.select("dataReducer2").subscribe((result:any)=>{
      // console.log(result.data);
      for (let index = 0; index < result.data.length; index++) {
        const res = result.data[index];
        if(this.detail.id==res.id){
          this.data2=res;
          // console.log(this.data1);
        }
      }
    });
    this.subscription3 = this.store.select("dataReducer3").subscribe((result:any)=>{
      // console.log(result.data);
      for (let index = 0; index < result.data.length; index++) {
        const res = result.data[index];
        if(this.detail.id==res.id){
          this.data3=res;
          // console.log(this.data1);
        }
      }
    });
  }
  ionViewDidLeave(){
    this.subscription.unsubscribe();
  }
  ionViewDidEnter(){
    this._subscribeRedux();   
  }

}
