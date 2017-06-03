import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


import { HistoryAction } from './../models/history-action';
import { TodoSection } from './../models/todo-section';


@Injectable()
export class HistoryActionService {
  actions: HistoryAction[] = [];

  private displayableAmount = 5;

  constructor() { }

  addAction(action: HistoryAction) {
    this.actions.push(action);
  }

  get orderedActions() {
    return this.actions
      .sort((a, b) => +a.createdAt < +b.createdAt ? 1 : -1)
      .slice(0, this.displayableAmount);
  }

}
