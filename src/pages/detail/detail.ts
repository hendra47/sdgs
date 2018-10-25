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
  data1:any=[];
  data1_backup:any=[];
  data2:any=[];
  data2_backup:any=[];
  data3:any=[];
  data3_backup:any=[];
  searchData=[];
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
    let profileModal = this.modalCtrl.create("SearchPage", { data: this.searchData });
    profileModal.present();
  }

  _subscribeRedux(){
    //asset subscribe
    this.subscription = this.store.select("dataReducer").subscribe((result:any)=>{
      this.data1=[];
      for (let index = 0; index < result.data.length; index++) {
        const res = result.data[index];
      // console.log(this.detail.id+" "+res.id_list1);
        if(this.detail.id==res.id_list1){
          this.data1.push(res);
          this.searchData.push(res);
          this.data1_backup.push(res);
          console.log(res);
        }
      }
    });
    this.subscription2 = this.store.select("dataReducer2").subscribe((result:any)=>{
      // console.log(result.data);
      this.data2=[];
      for (let index = 0; index < result.data.length; index++) {
        const res = result.data[index];
          // this.data2.push(res);
          this.data2_backup.push(res);
      }
    });
    this.subscription3 = this.store.select("dataReducer3").subscribe((result:any)=>{
      // console.log(result.data);
      this.data3=[];
      for (let index = 0; index < result.data.length; index++) {
        const res = result.data[index];
        // this.data3.push(res);
        this.data3_backup.push(res);
      }
    });
  }
  ionViewDidLeave(){
    this.subscription.unsubscribe();
  }
  ionViewDidEnter(){
    this._subscribeRedux();   
  }
  targetClick(item){
    this.data2=this.data2_backup;
    this.pilihan="indikator";
    this.data2=this.data2.filter((res) => {
        return res.id_child01.indexOf(item.id) > -1;
    })
    this.searchData=this.data2;
    console.log(this.data2);
  }
  indicatorClick(item){
    console.log("coba",item.id)
    this.data3=this.data3_backup;
    this.pilihan="metadata";
    this.data3=this.data3.filter((res) => {
        return res.id_child02.indexOf(item.id) > -1;
    })
    this.searchData=this.data3;
    console.log(this.data3);
  }

}
