import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../models/user';
import { InternaPage } from '../interna/interna';
import { LoginProvider } from '../../providers/loginprovider/loginprovider';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario = {} as User;
  internaPage: InternaPage;

  constructor(
    private alertCtrl: AlertController,
    private afAuth: LoginProvider,
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

  async cadastro(usuario: User){
    if(usuario.email == "" || usuario.senha == ""){
      this.alert('Erro', 'É necessário informar email e senha');
    } else{
      try{
        const result = await this.afAuth.signUp(usuario);
        if(result){
          let uid = this.afAuth.afAuth.auth.currentUser.uid;
          firebase.database().ref('users').child(uid).set({
            name: this.afAuth.afAuth.auth.currentUser.email,
            saldo: 0
          });
          this.navCtrl.setRoot(InternaPage);
        }
      } catch (e){
        this.alert('Erro ao cadastrar', e.message);
      }
    }
  }

  ionViewDidLoad() {
    this.afAuth.signOut();
  }

}
