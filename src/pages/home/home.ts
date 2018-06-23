import { Component } from '@angular/core'
import { NavController, MenuController } from 'ionic-angular'
import { ClientesCadastroPage } from '../clientes-cadastro/clientes-cadastro'
import { ProdutosCadastroPage } from '../produtos-cadastro/produtos-cadastro';
import { VendasCadastroPage } from '../vendas-cadastro/vendas-cadastro';
import { ContasCadastroPage } from '../contas-cadastro/contas-cadastro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) { }

  openMenu() {
    this.menuCtrl.open()
  }

  goScreenRegisterProduct() {
    this.navCtrl.push(ProdutosCadastroPage)
  }

  goScreenRegisterClient() {
    this.navCtrl.push(ClientesCadastroPage)
  }

  goScreenRegisterVenda() {
    this.navCtrl.push(VendasCadastroPage)
  }

  goScreenAccounts() {
    this.navCtrl.push(ContasCadastroPage)
  }

}
