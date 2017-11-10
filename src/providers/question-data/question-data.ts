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
    tableType: boolean = false;
    addType: boolean = false;
    subType: boolean = false;
    mulType: boolean = false;
    divType: boolean = true;
    mnfType: boolean = true;
    mnbType: boolean = false;

    tableQuesitonCount: number = 0;
    tableQuesitonTime: number = 0;
    addQuesitonCount: number = 0;
    addQuesitonTime: number = 0;
    subQuesitonCount: number = 0;
    subQuesitonTime: number = 0;
    mulQuesitonCount: number = 0;
    mulQuesitonTime: number = 0;
    divQuesitonCount: number = 0;
    divQuesitonTime: number = 0;
    mnfQuesitonCount: number = 0;
    mnfQuesitonTime: number = 0;
    mnbQuesitonCount: number = 0;
    mnbQuesitonTime: number = 0;

    questionArray: QuestionSingleDataProvider[] = [];
    tableQuestion: QuestionSingleDataProvider[] = [];
    addQuestion: QuestionSingleDataProvider[] = [];
    subQuestion: QuestionSingleDataProvider[] = [];
    mutiQuestion: QuestionSingleDataProvider[] = [];
    diviQuestion: QuestionSingleDataProvider[] = [];
    missingForwordQuestion: QuestionSingleDataProvider[] = [];
    missionBackwordQuestion: QuestionSingleDataProvider[] = [];
  

}
