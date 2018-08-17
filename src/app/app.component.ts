import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "ListPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.488aff
      // statusBar.overlaysWebView(false);
      if(platform.is('ios')){
        statusBar.backgroundColorByHexString('#2335d3');
      }else{
        statusBar.backgroundColorByHexString('#2335d3');
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

