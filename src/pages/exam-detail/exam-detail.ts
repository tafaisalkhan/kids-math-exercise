import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
import { HomePage } from '../../pages/home/home';
import { StartGamePage } from '../../pages/start-game/start-game';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private questionService: QuestionServiceProvider, private questionData: QuestionDataProvider, public loadingCtrl: LoadingController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamDetailPage');
    this.loadData();
  }

  loadData(){
    this.questionService.getQuestionList()
    .subscribe(data => {
      this.questionData.questions = data.kids_math.filter(grade => grade.name === this.questionData.selectedGrade);
      debugger;
      this.questionList = this.questionData.questions[0].questions;
      console.log(this.questionList);
      

    },
  (err) => {console.log(err);


    }
    );;
  
      
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
