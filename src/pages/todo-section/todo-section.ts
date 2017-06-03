import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


import { LocalTodoService } from "../../providers/local-todo.service";
import { TodoItem } from "../../models/todo-item";
import { HistoryActionPage } from "../history-action/history-action";
import { ApiTodoService } from "../../providers/api-todo.service";

/**
 * Generated class for the TodoSectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-todo-section',
  templateUrl: 'todo-section.html',
})
export class TodoSectionPage {
  section = this.navParams.data.section;
  newItemName = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localTodo: LocalTodoService,
    public apiTodo: ApiTodoService,
    public modalCtrl: ModalController
  ) {
    // console.log(navParams);
  }

  addItem() {
    this.localTodo.addItemToSection(this.section, this.newItemName);
    this.newItemName = '';
  }

  toggleItem(item: TodoItem) {
    console.log(item);
    this.localTodo.toggleItem(item);
  }

  showHistory() {
    let modal = this.modalCtrl.create(HistoryActionPage);
    modal.present();
  }

}
