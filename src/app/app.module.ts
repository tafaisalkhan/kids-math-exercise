import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExamDetailPage } from '../pages/exam-detail/exam-detail';
import { SelectGreadePage } from '../pages/select-greade/select-greade';
import { StartGamePage } from '../pages/start-game/start-game';
import { QuizResultPage } from '../pages/quiz-result/quiz-result';
import { DetailResultPage } from '../pages/detail-result/detail-result';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionConstantProvider } from '../providers/question-constant/question-constant';
import { QuestionServiceProvider } from '../providers/question-service/question-service';
import { Media, MediaObject } from '@ionic-native/media';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { QuestionDataProvider } from '../providers/question-data/question-data';
import { QuestionSingleDataProvider } from '../providers/question-single-data/question-single-data';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';

const firebaseConfig = {
  apiKey: "AIzaSyDmEWhbAaFR_23CY5GtW6QgLmnhq4Plpws",
  authDomain: "mathtest-44a54.firebaseapp.com",
  databaseURL: "https://mathtest-44a54.firebaseio.com",
  projectId: "mathtest-44a54",
  storageBucket: "mathtest-44a54.appspot.com",
  messagingSenderId: "362616830073"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectGreadePage,
    ExamDetailPage,
    StartGamePage,
    QuizResultPage,
    DetailResultPage 
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectGreadePage,
    ExamDetailPage,
    StartGamePage,
    QuizResultPage,
    DetailResultPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionConstantProvider,
    QuestionServiceProvider,
    QuestionDataProvider,
    QuestionSingleDataProvider
  ]
})

export class AppModule {}
