//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
import { QuestionSingleDataProvider } from '../../providers/question-single-data/question-single-data';
/*
  Generated class for the QuestionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionServiceProvider {

  //constructor(public http: Http,  public afd: AngularFireDatabase) {
    constructor(public http: Http, private questionData: QuestionDataProvider, private questinSingleData :QuestionSingleDataProvider) { 
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
generateQuestion(questions: any){
 debugger;
  for(let item of questions){
      console.log(item);
      let quest = new QuestionSingleDataProvider();
      quest.time = item.time;
      for(let tmpQuest = 0; tmpQuest < item.count ; tmpQuest ++ ){
        if (item.type == "table"){
          quest.operartion = "*";
          quest.first_number = this.randomNo(item.start_number, item.end_number) +"";
          quest.sec_number = this.randomNo(1, 10) +"";
          
        }
        else if (item.type == "addition"){
          quest.operartion = "+";
          quest.first_number = this.randomNo(item.start_number, item.end_number) +"";
          quest.sec_number = this.randomNo(item.start_number, item.end_number) +"";
          this.questionData.addQuestion.push(quest);
        }
        else if (item.type == "subtraction"){
          quest.operartion = "-";
          quest.first_number = this.randomNo(item.start_number, item.end_number) +"";
          quest.sec_number = this.randomNo(item.start_number, item.end_number) +"";
          this.questionData.subQuestion.push(quest);
        }
        else if (item.type == "multipul"){
          quest.operartion = "*";
          quest.first_number = this.randomNo(item.start_number, item.end_number) +"";
          quest.sec_number = this.randomNo(item.start_number, item.end_number) +"";
          this.questionData.mutiQuestion.push(quest);
        }
        else if (item.type == "divide"){
          quest.operartion = "/";
          quest.first_number = this.randomNo(item.start_number, item.end_number) +"";
          quest.sec_number = this.randomNo(item.start_number, item.end_number) +"";
          this.questionData.diviQuestion.push(quest);
        }
        else if (item.type == "mission_backword"){
          quest.operartion = "?";
          quest.first_number = "0"
          quest.sec_number = this.randomNo(item.start_number, item.end_number) +"";
          this.questionData.missionBackwordQuestion.push(quest);
        }
        else if (item.type == "mission_forword"){
          quest.title = item.name
          quest.operartion = "?";
          quest.first_number = this.randomNo(item.start_number, item.end_number) +"";
          quest.sec_number = "0"
          this.questionData.missingForwordQuestion.push(quest);
        }
      }
  }

 
  }

  randomNo(startNo:number , endNo: number){
    //return  Math.floor(Math.random() * endNo) + startNo ;
    return Math.floor(Math.random()*(endNo-startNo+1)+startNo);
  }

}
