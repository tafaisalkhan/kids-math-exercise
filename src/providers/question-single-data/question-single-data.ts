import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuestionSingleDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionSingleDataProvider {

  title: string;
  first_number: string;
  sec_number: string;
  correntAnswer: string;
  userWrongAnswer: string;
  operartion: string;
  time: number;


}
