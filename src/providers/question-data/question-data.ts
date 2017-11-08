import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { QuestionSingleDataProvider } from '../../providers/question-single-data/question-single-data';
/*
  Generated class for the QuestionDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionDataProvider {
    questions : any;
    selectedGrade: any;
    username: any;
    totalTime: number = 0;
    totalQuestion: number = 0;
    questionArray: QuestionSingleDataProvider[] = [];
    tableQuestion: QuestionSingleDataProvider[] = [];
    addQuestion: QuestionSingleDataProvider[] = [];
    subQuestion: QuestionSingleDataProvider[] = [];
    mutiQuestion: QuestionSingleDataProvider[] = [];
    diviQuestion: QuestionSingleDataProvider[] = [];
    missingForwordQuestion: QuestionSingleDataProvider[] = [];
    missionBackwordQuestion: QuestionSingleDataProvider[] = [];
  

}
