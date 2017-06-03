import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoSectionPage } from './todo-section';

@NgModule({
  declarations: [
    TodoSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoSectionPage),
  ],
  exports: [
    TodoSectionPage
  ]
})
export class TodoSectionPageModule {}
