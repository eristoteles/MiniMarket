import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';
import { InternaPage } from '../interna/interna';
import { PreloadPage } from '../preload/preload';
import { AddreceitaPage } from '../addreceita/addreceita';
import { AdddespesaPage } from '../adddespesa/adddespesa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cadastroPage = CadastroPage;
  loginPage = LoginPage;
  internaPage = InternaPage;
  preloadPage = PreloadPage;
  addReceitaPage = AddreceitaPage;
  addDespesaPage = AdddespesaPage;

  constructor(public navCtrl: NavController) {

  }

}
