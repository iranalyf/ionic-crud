import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContasCadastroPage } from './contas-cadastro';

@NgModule({
  declarations: [
    ContasCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(ContasCadastroPage),
  ],
})
export class ContasCadastroPageModule {}
