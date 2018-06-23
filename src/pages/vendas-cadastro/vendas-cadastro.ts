import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Sale, ItemSale } from '../../app/core/models/model';
import { ProdutosListagemPage } from '../produtos-listagem/produtos-listagem';
import { ProdutosCadastroPage } from '../produtos-cadastro/produtos-cadastro';

@IonicPage()
@Component({
  selector: 'page-vendas-cadastro',
  templateUrl: 'vendas-cadastro.html',
})
export class VendasCadastroPage {

  searchPage: ProdutosListagemPage
  registerPage: ProdutosCadastroPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  products = [
    {'description': 'Fone de Ouvido', 'valor': 80.00},
    {'description': 'Pen Drive 4 gb', 'valor': 20.00},
    {'description': 'I3 4ª geração', 'valor': 500.00},
    {'description': 'Gabinete Gamer', 'valor': 100.00},
    {'description': 'Teclado Gamer', 'valor': 200.00},
    {'description': 'Mouse Optico', 'valor': 50.60}
  ]

  itemsOfSale = new Array<ItemSale>()

  item = new ItemSale()

  sale = new Sale()

  addItemOfSale() {
    this.itemsOfSale.push(this.item)
    this.itemsOfSale = []
  }
  
  registerSale() {
    this.sale.dateOfSale = Date.now().toString()
    this.sale.itemsSale = this.itemsOfSale
    console.log('items: ', this.sale)
  }

}
