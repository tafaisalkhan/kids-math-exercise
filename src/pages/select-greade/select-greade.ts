import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../../pages/home/home';
//import { QuizResultPage } from '../../pages/quiz-result/quiz-result';
import { ExamDetailPage } from '../../pages/exam-detail/exam-detail';
import { QuestionServiceProvider } from '../../providers/question-service/question-service';
import { QuestionDataProvider } from '../../providers/question-data/question-data';

/**
 * Generated class for the SelectGreadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-greade',
  templateUrl: 'select-greade.html',
})
export class SelectGreadePage {
  private user : FormGroup;
  grade: string = "1";
 /* tableTime = 11;
  tableQuestion = 5; 
  addTime = 11;
  addQuestion = 5;
  subTime = 11;
  subQuestion = 5;
  mulTime = 11;
  mulQuestion = 5;
  divTime = 11;
  divQuestion = 5;
  mnfTime = 11;
  mnfQuestion = 5;
  mnbTime = 11;
  mnbQuestion = 5;
  ckhMnb = false;
  chkMnf = false;
  chkTable = false;
  chkAdd = false;
  chkSub = false;
  chkMul = false;
  chkDiv = false;*/

  constructor(private formBuilder: FormBuilder,  public navCtrl: NavController, public navParams: NavParams,  private questionService: QuestionServiceProvider, private questionData: QuestionDataProvider) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      grade: [''],
     /* tableTime:[''],
      tableQuestion:[''],
      addTime:[''],
      addQuestion:[],
      subTime:[''],
      subQuestion:[''],
      mulTime:[''],
      mulQuestion:[],
      divTime:[''],
      divQuestion:[''],
      mnfTime:[''],
      mnfQuestion:[],
      mnbTime:[''],
      mnbQuestion:[''],
      ckhTable:[false],
      ckhAdd:[false],
      ckhSub:[false],
      ckhMul:[false],
      ckhDiv:[false],
      ckhMnf:[false],
      ckhMnb:[false],*/
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectGreadePage');
  }

  
  startQuiz(){
  /*if(!this.user.controls.chkAdd.value || !this.user.controls.chkTable.value || !this.user.controls.chkSub.value 
    || !this.user.controls.chkMul.value || !this.user.controls.chkDiv.value || !this.user.controls.chkMnf.value
    || !this.user.controls.chkMnb.value){

    }

    if(this.user.controls.chkAdd.value ){
      if(this.user.controls.addTime.value ==  ""){

      }
      else if(this.user.controls.addQuestion.value ==  ""){

      }
        
      }*/
    this.questionData.username = this.user.controls.username.value;
    this.questionData.selectedGrade = this.user.controls.grade.value;
    console.log(this.questionData);
    this.navCtrl.push(ExamDetailPage);
  }
}
