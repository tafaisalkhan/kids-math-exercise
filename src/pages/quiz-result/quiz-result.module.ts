import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizResultPage } from './quiz-result';

@NgModule({
  declarations: [
    QuizResultPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizResultPage),
  ],
})
export class QuizResultPageModule {}
