import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Todo100ListPage } from './todo100-list';

@NgModule({
  declarations: [
    Todo100ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Todo100ListPage),
  ],
})
export class Todo100ListPageModule {}
