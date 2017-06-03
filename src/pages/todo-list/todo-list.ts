import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TodoSection } from './../../models/todo-section';
import { TodoSectionPage } from './../todo-section/todo-section';
import { LocalTodoService } from './../../providers/local-todo.service';
import { HistoryActionPage } from "../history-action/history-action";

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
    public localTodo: LocalTodoService,
    public modalCtrl: ModalController
  ) {
  }

  sectionSelected(section: TodoSection) {
    this.navCtrl.push(TodoSectionPage, { section: section });
  }

  addSection() {
    this.localTodo.addSection(this.newSectionName);
    this.newSectionName = '';
  }

  showHistory() {
    let modal = this.modalCtrl.create(HistoryActionPage);
    modal.present();
  }

}
