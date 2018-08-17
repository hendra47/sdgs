
import { Injectable } from '@angular/core';


@Injectable()
export class ReducerProvider {
  id:any;
  constructor() {
    console.log('Hello ReducerProvider Provider');
  }
  getId(){
    return this.id;
  }
  setID(id){
    this.id=id;
  }


}
