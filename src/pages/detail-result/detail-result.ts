import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuestionDataProvider } from '../../providers/question-data/question-data';
/**
 * Generated class for the DetailResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-result',
  templateUrl: 'detail-result.html',
})
export class DetailResultPage {
resultData: any[] = [{
    name: '',
    date: []
}]
currentIndex:number = 0;
finalresultData: any[] = []; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private resultDataService: QuestionDataProvider,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    //this.resultData = this.resultDataService.questionArray;
    debugger;
    for (let item of this.resultDataService.questionArray){
      this.resultData  = this.finalresultData.filter(data => data.name == item.title);

        if (this.resultData.length == 0){
          var tmpObj = {
            name: item.title,
            data: [] 
          }
          this.currentIndex ++;
          tmpObj.data.push(item);
          this.finalresultData.push(tmpObj);
        }
        else{
          this.finalresultData[this.currentIndex-1].data.push(item);
        }
        debugger;

    }
    console.log('ionViewDidLoad DetailResultPage');
  }

  hideModle(){
    this.viewCtrl.dismiss();
  }
}
