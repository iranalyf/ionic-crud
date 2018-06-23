import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendasListagemPage } from './vendas-listagem';

@NgModule({
  declarations: [
    VendasListagemPage,
  ],
  imports: [
    IonicPageModule.forChild(VendasListagemPage),
  ],
})
export class VendasListagemPageModule {}
