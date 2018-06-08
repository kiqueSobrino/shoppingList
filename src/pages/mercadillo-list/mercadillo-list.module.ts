import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MercadilloListPage } from './mercadillo-list';

@NgModule({
  declarations: [
    MercadilloListPage,
  ],
  imports: [
    IonicPageModule.forChild(MercadilloListPage),
  ],
})
export class MercadilloListPageModule {}
