import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendasCadastroPage } from './vendas-cadastro';

@NgModule({
  declarations: [
    VendasCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(VendasCadastroPage),
  ],
})
export class VendasCadastroPageModule {}
