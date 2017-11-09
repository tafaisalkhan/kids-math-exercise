import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
import { HomePage } from '../../pages/home/home';
import { StartGamePage } from '../../pages/start-game/start-game';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ExamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam-detail',
  templateUrl: 'exam-detail.html',
})
export class ExamDetailPage {
  questionList: any = [];
  version;
  constructor(public navCtrl: NavController, public navParams: NavParams, private questionService: QuestionServiceProvider, private storage: Storage, private questionData: QuestionDataProvider, public loadingCtrl: LoadingController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamDetailPage');
    this.loadData();
  }

  loadData(){
  /* this.questionService.getQuestionList()
    .subscribe(data => {
      this.questionData.questions = data.kids_math.filter(grade => grade.name === this.questionData.selectedGrade);
      debugger;
      this.questionList = this.questionData.questions[0].questions;
      console.log(this.questionList);
      

    },
  (err) => {console.log(err);


    }
    );;*/
  


    //this.storage.set('kidMathQuestionList',null);
    this.storage.get('kidMathQuestionList').then((val) => {
      if (val != null){
        this.questionData.questions = val.kids_math.filter(grade => grade.name === this.questionData.selectedGrade);
        this.questionList = this.questionData.questions[0].questions;
        this.storage.get('kidMathVersion').then((val) => {
          if (val != null){
            this.version =  val;
    
            this.questionService.getQuestionList()
            .subscribe(data => {
              if(this.version != data.version){
                this.questionData.questions = data.kids_math.filter(grade => grade.name === this.questionData.selectedGrade);
                this.questionList = this.questionData.questions[0].questions;
                this.version = data.version;
                this.storage.set('kidMathQuestionList', data);
                this.storage.set('kidMathVersion', data.version);
              }
            
              },
            (err) => {console.log(err);      
              }
              );
           
          }
         
        });
        
      }
      else
      {
       //this.questionServiceProvider.getQuestion()
       this.questionService.getQuestionList()
          .subscribe(data => {
            //this.dataList = data['questions'].type ;
            //this.version = data['questions'].version;
            //console.log(this.dataList);
            this.questionData.questions = data.kids_math.filter(grade => grade.name === this.questionData.selectedGrade);
            this.questionList = this.questionData.questions[0].questions;
           
            this.version = data.version;
            this.storage.set('kidMathQuestionList', data);
            this.storage.set('kidMathVersion', data.version);
            },
          (err) => {console.log(err);      
            }
            );
          }
    });
      
  }
  startQuiz(){
    var that = this
    this.presentLoading()
    that.questionService.generateQuestion(that.questionList);
    setTimeout(function() {
      
      that.navCtrl.push(StartGamePage);
    }, 1000);
    
    //
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait genrate questions...",
      duration: 3000
    });
    loader.present();
  }
}
