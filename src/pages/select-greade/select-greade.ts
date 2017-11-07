import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../../pages/home/home';
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
  constructor(private formBuilder: FormBuilder,  public navCtrl: NavController, public navParams: NavParams,  private questionService: QuestionServiceProvider, private questionData: QuestionDataProvider) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      grade: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectGreadePage');
  }

  
  startQuiz(){
    this.questionData.username = this.user.controls.username.value;
    this.questionData.selectedGrade = this.user.controls.grade.value;
    console.log(this.questionData);
    this.navCtrl.setRoot(ExamDetailPage);
  }
}
