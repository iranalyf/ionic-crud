import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Client } from '../../app/core/models/model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ClientesCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes-cadastro',
  templateUrl: 'clientes-cadastro.html',
})
export class ClientesCadastroPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
  }

  clients = new Array<Client>()

  client = new Client()

  saveClient() {
    this.clients.push(this.client)
    console.log('clients :', this.clients)
  }

}
