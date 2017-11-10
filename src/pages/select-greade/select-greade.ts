import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  username;
  chkTable = false;
  chkAdd = false;
  chkSub = false;
  chkMul = false;
  chkDiv = false;
  chkMnb = false;
  chkMnf = false;
  grade: string = "1";
  tableTime = 11;
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
  /*divTime = 11;
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

  constructor(private formBuilder: FormBuilder, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,  private questionService: QuestionServiceProvider, private questionData: QuestionDataProvider) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      chkTable:[false],
      chkAdd:[false],
      chkSub:[false],
      chkMul:[false],
      chkDiv:[false],
      chkMnf:[false],
      chkMnb:[false],
      grade: [''],
      tableTime:[''],
      tableQuestion:[''],
      addTime:[''],
      addQuestion:[],
      subTime:[''],
      subQuestion:[''],
      mulTime:[''],
      mulQuestion:[],
      divTime:[''],
      divQuestion:[''],
      mnbTime:[''],
      mnbQuestion:[''],
      mnfTime:[''],
      mnfQuestion:[],
      /*divTime:[''],
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
    this.username = this.questionData.username;
  }

  
  startQuiz(){
    this.questionData.tableQuesitonCount = 0;
    this.questionData.tableQuesitonTime = 0;
    this.questionData.addQuesitonCount = 0;
    this.questionData.addQuesitonTime = 0;
    this.questionData.subQuesitonCount = 0; 
    this.questionData.subQuesitonTime = 0;
    this.questionData.mulQuesitonCount = 0; 
    this.questionData.mulQuesitonTime = 0;
    this.questionData.divQuesitonCount = 0; 
    this.questionData.divQuesitonTime = 0; 
    this.questionData.mnfQuesitonCount = 0; 
    this.questionData.mnfQuesitonTime = 0;
    this.questionData.mnbQuesitonCount = 0; 
    this.questionData.mnbQuesitonTime = 0;
  if(this.user.controls.chkAdd.value || this.user.controls.chkTable.value || this.user.controls.chkSub.value 
    || this.user.controls.chkMul.value || this.user.controls.chkDiv.value || this.user.controls.chkMnf.value
    || this.user.controls.chkMnb.value){
      this.questionData.username = this.user.controls.username.value;
      this.questionData.selectedGrade = this.user.controls.grade.value;

      this.questionData.tableType = this.user.controls.chkTable.value;
      this.questionData.addType = this.user.controls.chkAdd.value;
      this.questionData.subType = this.user.controls.chkSub.value;
      this.questionData.mulType = this.user.controls.chkMul.value;
      this.questionData.divType =  this.user.controls.chkDiv.value;
      this.questionData.mnfType = this.user.controls.chkMnf.value;
      this.questionData.mnbType = this.user.controls.chkMnb.value;

      this.questionData.tableQuesitonCount = this.user.controls.tableQuestion.value;
      this.questionData.tableQuesitonTime =this.user.controls.tableTime.value;
      this.questionData.addQuesitonCount = this.user.controls.addQuestion.value;
      this.questionData.addQuesitonTime = this.user.controls.addTime.value;
      this.questionData.subQuesitonCount = this.user.controls.subQuestion.value; 
      this.questionData.subQuesitonTime = this.user.controls.subTime.value;
      this.questionData.mulQuesitonCount = this.user.controls.mulQuestion.value; 
      this.questionData.mulQuesitonTime = this.user.controls.mulTime.value;
      this.questionData.divQuesitonCount = this.user.controls.divQuestion.value; 
      this.questionData.divQuesitonTime = this.user.controls.divTime.value; 
      this.questionData.mnfQuesitonCount = this.user.controls.mnfQuestion.value; 
      this.questionData.mnfQuesitonTime = this.user.controls.mnfTime.value;
      this.questionData.mnbQuesitonCount = this.user.controls.mnbQuestion.value; 
      this.questionData.mnbQuesitonTime = this.user.controls.mnbTime.value;

      console.log(this.questionData);
      this.navCtrl.push(ExamDetailPage);  
      

    }

    else{
      this.showAlert();
    }
    
   
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please Select atleast one(1) question type ',
      buttons: ['OK']
    });
    alert.present();
  }
}
