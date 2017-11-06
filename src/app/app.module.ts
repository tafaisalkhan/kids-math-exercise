import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectGreadePage } from '../pages/select-greade/select-greade';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionConstantProvider } from '../providers/question-constant/question-constant';
import { QuestionServiceProvider } from '../providers/question-service/question-service';
import { Media, MediaObject } from '@ionic-native/media';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
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
    SelectGreadePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionConstantProvider,
    QuestionServiceProvider
  ]
})

export class AppModule {}
