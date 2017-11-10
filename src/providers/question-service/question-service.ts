//import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
import { QuestionSingleDataProvider } from '../../providers/question-single-data/question-single-data';
//import { AngularFireDatabase } from 'angularfire2/database';
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

  //getFireBaseQuestionList(){
  //  return this.afd.list('kids_math').valueChanges();
 // }

  getQuestionList() : Observable<any>{
   
    return this.http.get("assets/json/kid-math.json")

      .map((res:Response) => res.json())
    
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}
/*
generateQuestion(questions: any){
 debugger;
 this.questionData.questionArray = [];
 this.questionData.totalTime = 0;
 this.questionData.totalQuestion = 0;
  for(let item of questions){
      console.log(item);
      
     
     
      for(let tmpQuest = 0; tmpQuest < item.count ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.time = item.time;
        if (item.type == "table"){
          quest.operartion = "*";
          quest.first_number = this.randomNo(item.start_number, item.end_number) ;
          quest.sec_number = this.randomNo(1, 10) ;
          quest.title = "Table";
          quest.correct_answer = quest.first_number * quest.sec_number;
          quest.type = "table";
          this.questionData.questionArray.push(quest);
        }
        else if (item.type == "addition"){
          quest.operartion = "+";
          quest.first_number = this.randomNo(item.start_number, item.end_number) ;
          quest.sec_number = this.randomNo(item.start_number, item.end_number) ;
          quest.title = "Addition";
          quest.correct_answer = quest.first_number + quest.sec_number;
          quest.type = "addition";
          this.questionData.questionArray.push(quest);
        }
        else if (item.type == "subtraction"){
          quest.operartion = "-";
          quest.first_number = this.randomNo(item.start_number, item.end_number);
          quest.sec_number = this.randomNo(item.start_number, item.end_number) ;
          if(quest.sec_number > quest.first_number){
            let tmp = quest.first_number;
            quest.first_number = quest.sec_number;
            quest.sec_number = tmp;
          }
          quest.title = "Subtraction";
          quest.correct_answer = quest.first_number - quest.sec_number;
          quest.type = "subtraction";
          this.questionData.questionArray.push(quest);
        }
        else if (item.type == "multipul"){
          quest.operartion = "*";
          quest.first_number = this.randomNo(item.start_number, item.end_number) ;
          quest.sec_number = this.randomNo(item.start_number, item.end_number) ;
          quest.title = " Multipul ";
          quest.correct_answer = quest.first_number * quest.sec_number;
          quest.type = "multipul";
          this.questionData.questionArray.push(quest);
        }
        else if (item.type == "divide"){
          quest.operartion = "/";
          //uest.first_number = this.randomNo(item.start_number, item.end_number) ;
          quest.sec_number = this.randomNo(item.start_number, item.end_number) ;
          quest.first_number =  quest.sec_number * this.randomNo(1, 4)
          quest.title = "Divided";
          quest.correct_answer = quest.first_number / quest.sec_number;
          quest.type = "divide";
          this.questionData.questionArray.push(quest);
        }
        else if (item.type == "mission_backword"){
          quest.operartion = "?";
          //quest.first_number = 0
          quest.first_number = this.randomNo(item.start_number, item.end_number) ;
          quest.title = "Find Missing";
          quest.correct_answer = quest.first_number - 1; 
          quest.sec_number = quest.correct_answer - 1;
          quest.type = "mission_backword";
          this.questionData.questionArray.push(quest);
        }
        else if (item.type == "mission_forword"){
          quest.title = item.name
          quest.operartion = "?";
          quest.first_number = this.randomNo(item.start_number, item.end_number) ;
          //quest.sec_number = 0
          quest.title = "Find Missing";
          quest.correct_answer = quest.first_number + 1; 
          quest.sec_number = quest.correct_answer + 1;
          quest.type = "mission_forword";
          this.questionData.questionArray.push(quest);
        }
        this.questionData.totalTime = this.questionData.totalTime + item.time;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }
  }

 
  }
*/
  generateQuestionCustome(questions: any){
    debugger;
    this.questionData.questionArray = [];
    this.questionData.totalTime = 0;
    this.questionData.totalQuestion = 0;

    if(this.questionData.tableType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.tableQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "*";
        quest.first_number = this.randomNo(questions.filter(data => data.type == "table")[0].start_number, questions.filter(data => data.type == "table")[0].end_number) ;
        quest.sec_number = this.randomNo(1, 10) ;
        quest.title = "Table";
        quest.correct_answer = quest.first_number * quest.sec_number;
        quest.type = "table";
        quest.time = this.questionData.tableQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }

    }

    if(this.questionData.addType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.addQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "+";
        quest.first_number = this.randomNo(questions.filter(data => data.type == "addition")[0].start_number, questions.filter(data => data.type == "addition")[0].end_number) ;
        quest.sec_number = this.randomNo(questions.filter(data => data.type == "addition")[0].start_number, questions.filter(data => data.type == "addition")[0].end_number) ;
        quest.title = "Addition";
        quest.correct_answer = quest.first_number + quest.sec_number;
        quest.type = "addition";
        quest.time = this.questionData.addQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }

    }
    if (this.questionData.subType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.subQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "-";
        quest.first_number = this.randomNo(questions.filter(data => data.type == "subtraction")[0].start_number, questions.filter(data => data.type == "subtraction")[0].end_number);
        quest.sec_number = this.randomNo(questions.filter(data => data.type == "subtraction")[0].start_number, questions.filter(data => data.type == "subtraction")[0].end_number) ;
        if(quest.sec_number > quest.first_number){
          let tmp = quest.first_number;
          quest.first_number = quest.sec_number;
          quest.sec_number = tmp;
        }
        quest.title = "Subtraction";
        quest.correct_answer = quest.first_number - quest.sec_number;
        quest.type = "subtraction";
        quest.time = this.questionData.subQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }
    }

    if (this.questionData.mulType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.mulQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "*";
        quest.first_number = this.randomNo(questions.filter(data => data.type == "multipul")[0].start_number, questions.filter(data => data.type == "multipul")[0].end_number) ;
        quest.sec_number = this.randomNo(questions.filter(data => data.type == "multipul")[0].start_number, questions.filter(data => data.type == "multipul")[0].end_number) ;
        quest.title = " Multipul ";
        quest.correct_answer = quest.first_number * quest.sec_number;
        quest.type = "multipul";
        quest.time = this.questionData.mulQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }
    }

    if (this.questionData.divType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.mulQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "/";
        //uest.first_number = this.randomNo(item.start_number, item.end_number) ;
        quest.sec_number = this.randomNo(questions.filter(data => data.type == "divide")[0].start_number, questions.filter(data => data.type == "divide")[0].end_number) ;
        quest.first_number =  quest.sec_number * this.randomNo(1, 4)
        quest.title = "Divided";
        quest.correct_answer = quest.first_number / quest.sec_number;
        quest.type = "divide";
        quest.time = this.questionData.divQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }
    }
    
    if (this.questionData.mnbType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.mnbQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "?";
        //quest.first_number = 0
        quest.first_number = this.randomNo(questions.filter(data => data.type == "mission_backword")[0].start_number, questions.filter(data => data.type == "mission_backword")[0].end_number) ;
        quest.title = "Find Missing";
        quest.correct_answer = quest.first_number - 1; 
        quest.sec_number = quest.correct_answer - 1;
        quest.type = "mission_backword";
        quest.time = this.questionData.mnbQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }
    }

    if (this.questionData.mnfType){
      for(let tmpQuest = 0; tmpQuest < this.questionData.mnfQuesitonCount ; tmpQuest ++ ){
        let quest = new QuestionSingleDataProvider();
        quest.operartion = "?";
        quest.first_number = this.randomNo(questions.filter(data => data.type == "mission_forword")[0].start_number, questions.filter(data => data.type == "mission_forword")[0].end_number) ;
        //quest.sec_number = 0
        quest.title = "Find Missing";
        quest.correct_answer = quest.first_number + 1; 
        quest.sec_number = quest.correct_answer + 1;
        quest.type = "mission_forword";
        quest.time = this.questionData.mnfQuesitonTime
        this.questionData.questionArray.push(quest);
        this.questionData.totalTime = this.questionData.totalTime + quest.time -1;
        this.questionData.totalQuestion = this.questionData.totalQuestion + 1;
      }
    }

     }

  randomNo(startNo:number , endNo: number){
    //return  Math.floor(Math.random() * endNo) + startNo ;
    return Math.floor(Math.random()*(endNo-startNo+1)+startNo);
  }

}
