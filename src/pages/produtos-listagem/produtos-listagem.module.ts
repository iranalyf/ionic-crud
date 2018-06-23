import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosListagemPage } from './produtos-listagem';

@NgModule({
  declarations: [
    ProdutosListagemPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutosListagemPage),
  ],
})
export class ProdutosListagemPageModule {}
