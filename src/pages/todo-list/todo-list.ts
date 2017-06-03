import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoSection } from './../../models/todo-section';
// import { TodoSectionPage } from './../todo-section/todo-section';
import { LocalTodoService } from './../../providers/local-todo.service';

/**
 * Generated class for the TodoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
  newSectionName = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localTodo: LocalTodoService
  ) {
  }

  sectionSelected(section: TodoSection) {
    // this.navCtrl.push(TodoSectionPage, { section: section });
  }

  addSection() {
    this.localTodo.addSection(this.newSectionName);
    this.newSectionName = '';
  }

}
