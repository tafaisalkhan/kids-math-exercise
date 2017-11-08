import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { DetailResultPage } from '../../pages/detail-result/detail-result';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
/**
 * Generated class for the StartGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start-game',
  templateUrl: 'start-game.html',
})
export class StartGamePage {
  totalQuestion: any;
  totalTime: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private questionService: QuestionServiceProvider, private questionData: QuestionDataProvider){
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartGamePage');
    this.totalQuestion = this.questionData.totalQuestion;
    this.totalTime = this.questionData.totalTime;

  }
  startQuiz(){
    this.navCtrl.push(HomePage);
  }
}
