import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../models/user';
import { InternaPage } from '../interna/interna';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/loginprovider/loginprovider';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {} as User;
  internaPage: InternaPage;
  homePage: HomePage;

  constructor(
    private afAuth: LoginProvider,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  alert(title, message){
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async entrar(usuario: User){
    if(usuario.email == "" || usuario.senha == ""){
      this.alert('Erro', 'É necessário informar email e senha');
    } else{
      try {
        const result = await this.afAuth.signIn(usuario);
        if(result){
          this.navCtrl.setRoot(InternaPage);
        }
      } catch (e) {
        this.alert('Erro ao logar', e.message);
      }
    }
  }

  ionViewDidLoad() {
    this.afAuth.signOut();
  }

}
