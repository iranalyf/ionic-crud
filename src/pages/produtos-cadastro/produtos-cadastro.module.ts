import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosCadastroPage } from './produtos-cadastro';

@NgModule({
  declarations: [
    ProdutosCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosCadastroPage),
  ],
})
export class ProdutosCadastroPageModule {}
