import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';
import Config, { ApiHelper } from '../config/config';
import { REQUEST_DATA1,REQUEST_ERROR1,REQUEST_SUCCESS1,
         REQUEST_DATA2,REQUEST_ERROR2,REQUEST_SUCCESS2,
         REQUEST_DATA3,REQUEST_ERROR3,REQUEST_SUCCESS3 } from '../actions/action';
@Injectable()
export class reqEffects {
    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private api: ApiHelper
    ) { }
    @Effect() req1$: Observable<Action> = this.actions$.pipe(
        ofType(REQUEST_DATA1),
        mergeMap((action:any) =>
          this.http.get(this.api.getApiUrl(Config.apis.get01)).pipe(
            // If successful, dispatch success action with result
            map(res => {
              return  { type: REQUEST_SUCCESS1, payload: res }
            }),
            // If request fails, dispatch failed action
            catchError((err) => of({ type: REQUEST_ERROR1 ,payload: {error:true,msg:err}}))
          )
        )
      );
      @Effect() req2$: Observable<Action> = this.actions$.pipe(
        ofType(REQUEST_DATA2),
        mergeMap((action:any) =>
          this.http.get(this.api.getApiUrl(Config.apis.get02)).pipe(
            // If successful, dispatch success action with result
            map(res => {
              return  { type: REQUEST_SUCCESS2, payload: res }
            }),
            // If request fails, dispatch failed action
            catchError((err) => of({ type: REQUEST_ERROR2 ,payload: {error:true,msg:err}}))
          )
        )
      );
      @Effect() req3$: Observable<Action> = this.actions$.pipe(
        ofType(REQUEST_DATA3),
        mergeMap((action:any) =>
          this.http.get(this.api.getApiUrl(Config.apis.get03)).pipe(
            // If successful, dispatch success action with result
            map(res => {
              return  { type: REQUEST_SUCCESS3, payload: res }
            }),
            // If request fails, dispatch failed action
            catchError((err) => of({ type: REQUEST_ERROR3 ,payload: {error:true,msg:err}}))
          )
        )
      );

}