import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


import { TodoListPage } from './todo-list';

@NgModule({
  declarations: [
    TodoListPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoListPage)
  ],
  exports: [
    TodoListPage
  ]
})
export class TodoListPageModule { }
