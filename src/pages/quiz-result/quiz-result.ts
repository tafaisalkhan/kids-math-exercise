
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Component, ViewChild, } from '@angular/core';
import { Chart } from 'chart.js';
import { ExamDetailPage } from '../../pages/exam-detail/exam-detail';
import { DetailResultPage } from '../../pages/detail-result/detail-result';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
/**
 * Generated class for the QuizResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-result',
  templateUrl: 'quiz-result.html',
})
export class QuizResultPage {
@ViewChild('barCanvas') barCanvas;
barChart: any;
percentage: number = 0;
totalQuestion: number = 0;
totalCorrectQuesiton :number = 0;
resultLableArray: any = [];
resultDataArray: any = [];
constructor(public navCtrl: NavController, private questionService: QuestionServiceProvider, private questionData: QuestionDataProvider, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {

  
}

loadData(){
  var type = "";
  var typeReslutCount = 0;
  var title;
  for(let item of this.questionData.questionArray)
  {
      

      //this.totalQuestion ++;
      console.log(item);
      if(type == "" || type == item.type){
          if(item.correct_answer === item.user_answer){
            this.totalCorrectQuesiton ++;
            typeReslutCount ++;
          }
          type = item.type;
          title = item.title;
       }
       else
       {
        this.resultLableArray.push(title);
        this.resultDataArray.push(typeReslutCount); 
        typeReslutCount = 0
        type = item.type;
        title = item.title;
        if(item.correct_answer === item.user_answer){
          this.totalCorrectQuesiton ++;
          typeReslutCount ++;
        }
       
       } 
      this.totalQuestion ++;
  }
  this.resultLableArray.push(title);
  this.resultDataArray.push(typeReslutCount); 

  this.percentage =Math.round((this.totalCorrectQuesiton / this.totalQuestion) * 100)
 

}

quizDetail(){

  let modal = this.modalCtrl.create(DetailResultPage);
  modal.present();
}

restartQuiz(){
  this.navCtrl.setRoot(ExamDetailPage);
}
ionViewDidLoad() {
  this.loadData();
  this.generateGraph();

}

generateGraph(){

  this.barChart = new Chart(this.barCanvas.nativeElement, {
    
        type: 'bar',
        data: {
            labels: this.resultLableArray,
            datasets: [{
                label: 'Type of Question',
                data: this.resultDataArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });
}

}