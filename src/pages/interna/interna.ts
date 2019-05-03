import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddreceitaPage } from '../addreceita/addreceita';
import { AdddespesaPage } from '../adddespesa/adddespesa';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/loginprovider/loginprovider';
import firebase, { User } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-interna',
  templateUrl: 'interna.html',
})
export class InternaPage {

  usuario = {} as User;
  addReceitaPage = AddreceitaPage;
  addDespesaPage = AdddespesaPage;
  homePage = HomePage;
  state: { saldo: number; historico: any[]; };

  constructor(
    private afAuth: LoginProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.state = {
        saldo: 0,
        historico: []
      }

      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          firebase.database().ref('users').child(user.uid).on('value', (snapshotChanges) => {
            let state = this.state;
            state.saldo = snapshotChanges.val().saldo;
            return state.saldo;
          });
          firebase.database().ref('historico').child(user.uid).on('value', (snapshotChanges) => {
            let state = this.state;
            state.historico = [];
            snapshotChanges.forEach((childItem) => {
              state.historico.push({
                key:childItem.key,
                type:childItem.val().type,
                valor:parseFloat(childItem.val().valor).toFixed(2)
              });
            });
            return state.historico;
          });
        } else{
          this.navCtrl.setRoot(HomePage);
        }
      });
  }

  sair(){
    this.afAuth.signOut();
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaPage');
  }

}
