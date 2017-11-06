import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { state, group, trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';

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
  count = 6;
  imgSrc;
  answer = "?";
  answerLenght = 1;
  correctAnswer = 2; 
  userAnswerType = "waiting";
  watchMe ="fly"
  private event: MouseEvent;
  observable: any;
  questionData: any;

  constructor(public navCtrl: NavController, private questionService: QuestionServiceProvider ) {
      this.imgSrc = "assets/imgs/1.png";
   

      this.timer();
      this.loadData();
  }

  loadData(){
    this.questionService.getQuestionList()
    .subscribe(data => {
      this.questionData = data;
      console.log(data);
      this.questionService.generateQuestion(this.questionData);

    },
  (err) => {console.log(err);


    }
    );;
  
      
  }

  tapNumber(number, event){

    //console.log(number);
    this.imgSrc = "assets/imgs/1_selected.png";

  }

  tapEvent(element, number, event){
  
    if(event.type == "mousedown"){
    
        event.currentTarget.childNodes[1].src = "assets/imgs/"+ number + "_selected.png";
        }
        else if(event.type == "mouseup"){
          var thisElement = event.currentTarget;
          
          setTimeout(function() {
          
          thisElement.childNodes[1].src = "assets/imgs/"+number+".png";
          
          }, 100);
          
        }
        if(this.answer.length < this.answerLenght + 1){
          console.log(number );
          if( this.answer == "?"){
            this.answer = number;
          }
          else{
            this.answer = this.answer + "" + number;
          }  
          
          if(this.correctAnswer+"" == this.answer){
            this.userAnswerType = "correctAnswer";
            this.watchMe = "fade";
          }
          else{
            this.userAnswerType = "wrongAnswer"
          }
      }
      
  }  

  fade(){
    this.watchMe = "fade";
  }

  fly(){
    this.count = 6;
    this.watchMe = "fly";
    this.timer();
  }


  timer(){

    let timer:any = Observable.timer(0,1000);
    let subscription = timer.subscribe(data => {
      this.count = this.count -1;
      if(data == 5) {
        this.watchMe = "fade";
        subscription.unsubscribe();
      }
    });
     
  }
  logAnimation(event){
    //console.log(event);
    if (event.phaseName == "done" && event.toState == "fade"){
     this.fly();
     // console.log(event);
     // this.count = 6;
     // this.watchMe = "fly";
     // this.timer();
    }
    
   
    
  }   
  
}
