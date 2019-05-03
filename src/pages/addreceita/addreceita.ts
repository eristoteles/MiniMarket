import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InternaPage } from '../interna/interna';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-addreceita',
  templateUrl: 'addreceita.html',
})
export class AddreceitaPage {

  internaPage = InternaPage;
  state: {valor: string;};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.state = {
        valor:''
      };

  }

  add(){
    if(this.state.valor != ''){
      let historico = firebase.database().ref('historico').child(firebase.auth().currentUser.uid);
      let user = firebase.database().ref('users').child(firebase.auth().currentUser.uid);
      let key = historico.push().key;

      historico.child(key).set({
        type:'receita',
        valor:this.state.valor
      });

      user.once('value')
      .then((snapshotChanges) => {
        let saldo = snapshotChanges.val().saldo;
        saldo += parseFloat(this.state.valor);

        user.set({
          saldo:saldo
        });

        this.navCtrl.setRoot(InternaPage);

      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreceitaPage');
  }

}
