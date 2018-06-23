import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientesCadastroPage } from '../pages/clientes-cadastro/clientes-cadastro';
import { ClientesCadastroPageModule } from '../pages/clientes-cadastro/clientes-cadastro.module';
import { ProdutosCadastroPageModule } from '../pages/produtos-cadastro/produtos-cadastro.module';
import { VendasCadastroPageModule } from '../pages/vendas-cadastro/vendas-cadastro.module';
import { ContasCadastroPageModule } from '../pages/contas-cadastro/contas-cadastro.module';
import { ClientsProvider } from '../providers/clients/clients';
import { VendsProvider } from '../providers/vends/vends';
import { ProductsProvider } from '../providers/products/products';

export const config = {
  apiKey: "AIzaSyBlz7GtH-1HJheLZK_tAuTuClciKcf-Ov4",
  authDomain: "controle-vendas-ff001.firebaseapp.com",
  databaseURL: "https://controle-vendas-ff001.firebaseio.com",
  projectId: "controle-vendas-ff001",
  storageBucket: "",
  messagingSenderId: "745715689013"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),

    ClientesCadastroPageModule,
    ProdutosCadastroPageModule,
    VendasCadastroPageModule,
    ContasCadastroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClientsProvider,
    VendsProvider,
    ProductsProvider
  ]
})
export class AppModule { }
