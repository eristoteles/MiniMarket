import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { InternaPage } from '../pages/interna/interna';
import { PreloadPage } from '../pages/preload/preload';
import { AddreceitaPage } from '../pages/addreceita/addreceita';
import { AdddespesaPage } from '../pages/adddespesa/adddespesa';
import { LoginProvider } from '../providers/loginprovider/loginprovider';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

  var config = {
    apiKey: "AIzaSyA5wFXVdMznxgaHFTdRXlKLPZI3xo0oGV8",
    authDomain: "teste-fb24a.firebaseapp.com",
    databaseURL: "https://teste-fb24a.firebaseio.com",
    projectId: "teste-fb24a",
    storageBucket: "",
    messagingSenderId: "1037550712997"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage,
    InternaPage,
    PreloadPage,
    AddreceitaPage,
    AdddespesaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    LoginPage,
    InternaPage,
    PreloadPage,
    AddreceitaPage,
    AdddespesaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {}
