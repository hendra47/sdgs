import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';

import { ReducerProvider } from '../providers/reducer/reducer';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ApiHelper } from '../config/config';
//Reducer
import { dataReducer } from '../reducers/dataReducer';
import { dataReducer2 } from '../reducers/dataReducer2';
import { dataReducer3 } from '../reducers/dataReducer3';
import { config } from '../reducers/config';

//effect
import { reqEffects } from '../effects/reqEffects';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['dataReducer','dataReducer2','dataReducer3','config'],rehydrate:true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot({
      name: 'promis_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot({dataReducer,dataReducer2,dataReducer3,config},{metaReducers}),
    EffectsModule.forRoot([reqEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 35 //  Retains last 25 states
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    ApiHelper,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReducerProvider
  ]
})
export class AppModule {}
