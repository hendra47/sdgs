import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  data=[];
  data_backup=[];
  myInput:any;
  cariBy:"";
  constructor(private _zone: NgZone,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this._zone.run(() =>{
    this.cariBy=this.navParams.get("cariBy");
    this.data=this.navParams.get("data");
    this.data_backup=this.navParams.get("data");
    console.log(this.data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  onInput(){
    if(this.myInput){
        this.data=this.data.filter((item) => {
          return item.title.toLowerCase().indexOf(this.myInput.toLowerCase()) > -1;
      });
    }else{
      this.data=this.data_backup;
    }
  }
  onCancel(){

  }

  goBack(){
    this.viewCtrl.dismiss();
  }

}
