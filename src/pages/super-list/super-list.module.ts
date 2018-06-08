import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperListPage } from './super-list';

@NgModule({
  declarations: [
    SuperListPage,
  ],
  imports: [
    IonicPageModule.forChild(SuperListPage),
  ],
})
export class SuperListPageModule {}
