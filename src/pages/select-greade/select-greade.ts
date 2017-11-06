import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../../pages/home/home';
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
  grade: string = "grade1";
  constructor(private formBuilder: FormBuilder,  public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      grade: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectGreadePage');
  }

  startQuiz(){
    this.navCtrl.setRoot(HomePage)
  }
}
