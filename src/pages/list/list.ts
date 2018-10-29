import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import list from "../../data/data";
import { ReducerProvider } from '../../providers/reducer/reducer';
import { Store } from '@ngrx/store';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  arrList:any=[];
  subscription:any;
  loading:any;
  constructor(private toastCtrl:ToastController,private store: Store<any>,public loadingCtrl: LoadingController,private iab: InAppBrowser,public service :ReducerProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.arrList=list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  next(item){
    if(item.id==18){
      this.iab.create('http://sdgs.bappenas.go.id/');
    }else{
      this.service.setID(item.id);
      this.navCtrl.push("DetailPage",{item:item},{animate:true,animation:'transition',duration:700,direction:'forward'})
    }
  }

  presentLoadingDefault() {
    this._spinner();
    this.store.dispatch({ type: "REQUEST_DATA1", payload:{loading:true}}); 
    this.store.dispatch({ type: "REQUEST_DATA2", payload:{loading:true}}); 
    this.store.dispatch({ type: "REQUEST_DATA3", payload:{loading:true}}); 
  }
  _spinner(){
    this.loading = this.loadingCtrl.create({
      content: 'Get data from server. please wait...',
      spinner:'bubbles'
    });
    this.loading.present();
  }
  _subscribeRedux(){
    //asset subscribe
    this.subscription = this.store.select("dataReducer").subscribe((result:any)=>{
      console.log(result);
      if(result.actionStatus=="REQUEST_SUCCESS1"){
        if(this.loading){
          this._showToast("Successfully update data...");
          this.loading.dismiss();
        }
      }else if(result.actionStatus=="REQUEST_ERROR1"){
        if(this.loading){
          this._showToast("Connection Failed,Please try again...");
          this.loading.dismiss();
        }
      }
    });
  }
  ionViewDidEnter(){
    this._subscribeRedux();
  }
  ionViewDidLeave(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  _showToast(msg){
    let toast = this.toastCtrl.create({
      message:msg,
      duration:4000,
      position:'top'
    });
    toast.present();
  }

}
