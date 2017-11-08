import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { QuizResultPage } from '../../pages/quiz-result/quiz-result';
import { state, group, trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
import { QuestionSingleDataProvider } from '../../providers/question-single-data/question-single-data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('itemInOut', [
      state('fly', style({
        transform: 'translateX(0)',
      })),
      state('fade',   style({
        transform: 'translateX(-150%)',
       
      })),
     
    transition('* => fly',
      animate('500ms', keyframes([
        style({transform: 'translateX(100%)', opacity: 1}),
        style({transform: 'translateX(0)', opacity: 1})
      ])
    )),
    transition('fly => fade',
    animate('500ms', keyframes([
      style({transform: 'translateX(0%)', opacity: 1}),
      style({transform: 'translateX(-100%)', opacity: 1})
    ])
  ))
    ])
  ]
})
export class HomePage {
  countDown;
  count = 0;
  imgSrc;
  answer = "?";
  answerLenght = 1;
  correctAnswer = 2; 
  userAnswerType = "waiting";
  watchMe ="fly"
  private event: MouseEvent;
  observable: any;
  firstNo: any;
  secondNo:any;
  operator:any;
  questionTitle: any;
  questionType: string;
  questionIndex = 0;
  sigleQuestion: QuestionSingleDataProvider;
  subscription: any;
  constructor(public navCtrl: NavController, private questionService: QuestionServiceProvider,  private questionData: QuestionDataProvider, public alertCtrl: AlertController) {
      this.imgSrc = "assets/imgs/1.png";
   

      this.timer();
      this.loadData();
  }

  loadData(){
    this.getNextQuestion(this.questionIndex);
  }

  tapNumber(number, event){

    //console.log(number);
    this.imgSrc = "assets/imgs/1_selected.png";

  }

  tapEvent(element, number, event){
  
    if(number > -1) {
      if(event.type == "mousedown"){
      
          event.currentTarget.childNodes[1].src = "assets/imgs/"+ number + "_selected.png";
          }
          else if(event.type == "mouseup"){
            var thisElement = event.currentTarget;
            
            setTimeout(function() {
            
            thisElement.childNodes[1].src = "assets/imgs/"+number+".png";
            
            }, 100);
            
          }
          if(event.type == "mouseup"){  
        // if(this.answer.toString().length < this.questionData.questionArray[this.questionIndex - 1 ].correct_answer.toString().length ){
            console.log(number );
            if( this.answer == "?"){
              this.answer = number;
            }
            else{
              this.answer = this.answer + "" + number;
            }  
            
            if(this.questionData.questionArray[this.questionIndex - 1 ].correct_answer+"" == this.answer){
              this.userAnswerType = "correctAnswer";
              this.questionData.questionArray[this.questionIndex - 1].user_answer =  parseInt(this.answer)
              this.subscription.unsubscribe();
              this.count = 0;
              this.showAlert();
            
              
            }
            else if(this.answer.toString().length == this.questionData.questionArray[this.questionIndex - 1 ].correct_answer.toString().length){
              this.questionData.questionArray[this.questionIndex - 1].user_answer =  parseInt(this.answer)  
              this.userAnswerType = "wrongAnswer"
              this.count = 0;
              this.subscription.unsubscribe();
              this.showAlert();
              //this.watchMe = "fade"
            }
            
      // }
      }

  }
    else{
      if(event.type == "mousedown"){
        
            event.currentTarget.childNodes[1].src = "assets/imgs/del_selected.png";
            }
            else if(event.type == "mouseup"){
              var thisElement = event.currentTarget;
              
              setTimeout(function() {
              
              thisElement.childNodes[1].src = "assets/imgs/del.png";
              
              }, 100);
              
            }
            if(event.type == "mouseup"){  
              this.answer = this.answer.toString().substr(0,this.answer.length-1);
           // if(this.answer.toString().length < this.questionData.questionArray[this.questionIndex - 1 ].correct_answer.toString().length ){
              console.log(number );
             if( this.answer.length  ==  0){
                this.answer = "?";
              }
            /*  else{
                this.answer = this.answer.substr(1, this.answer.length);
              }*/  
              
              
        // }
        }
    }
      
  }  

  fade(){
    this.watchMe = "fade";
  }

  fly(){
    //this.count = 6;
    this.watchMe = "fly";
    this.timer();
  }


  timer(){
    let timer:any = Observable.timer(0,1000);
    this.subscription = timer.subscribe(data => {
      this.count = Math.abs(this.count) -1;
      if(data == 5) {
        this.watchMe = "fade";
        this.subscription.unsubscribe();
      }
    });
     
  }
  logAnimation(event){
    //console.log(event);
    if (event.phaseName == "done" && event.toState == "fade"){
      try{
        if(this.questionData.questionArray[this.questionIndex - 1].user_answer == undefined ){
          this.questionData.questionArray[this.questionIndex - 1].user_answer = -1 
        }
        this.getNextQuestion(this.questionIndex);
        this.userAnswerType = "waitingAnswer";
        this.answer = "?";
        this.fly();
      }
      catch(e){
        this.navCtrl.setRoot(QuizResultPage);
      }
     // console.log(event);
     // this.count = 6;
     // this.watchMe = "fly";
     // this.timer();
    }
    
   
    
  }   

  getNextQuestion(index: number){
    this.sigleQuestion = this.questionData.questionArray[index];
    this.firstNo = this.sigleQuestion.first_number;
    this.secondNo = this.sigleQuestion.sec_number;
    this.operator = this.sigleQuestion.operartion;
    this.questionTitle = this.sigleQuestion.title;
    this.questionType = this.sigleQuestion.type;
    this.correctAnswer = this.sigleQuestion.correct_answer;
    this.questionIndex = this.questionIndex + 1;
    this.count = this.sigleQuestion.time;
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Your Answer',
      subTitle: this.answer,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.watchMe = "fade"
            console.log('Disagree clicked');
          }
        }

      ]
    });
    alert.present();
  }

}
