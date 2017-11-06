//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the QuestionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionServiceProvider {

  //constructor(public http: Http,  public afd: AngularFireDatabase) {
    constructor(public http: Http) { 
        console.log('Hello QuestionServiceProvider Provider');
  }

  getFireBaseQuestionList(){
    return null; // this.afd.list('app_data')
  }

  getQuestionList() : Observable<any>{
   
    return this.http.get("assets/json/kid-math.json")

      .map((res:Response) => res.json())
    
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
generateQuestion(kidsGreade: string){
    console.log(kidsGreade);
  }
}
