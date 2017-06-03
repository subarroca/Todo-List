import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


import { HistoryAction } from './../models/history-action';


@Injectable()
export class HistoryActionService {
  private actions: HistoryAction[] = [];

  private actionsSubject: BehaviorSubject<HistoryAction[]> = new BehaviorSubject<HistoryAction[]>([]);
  actions$: Observable<HistoryAction[]> = this.actionsSubject.asObservable();

  private readonly displayableAmount = 5;

  constructor() { }

  addAction(action: HistoryAction) {
    console.log(action);
    this.actions.push(action);

    this.actionsSubject.next(this.orderedActions);
  }

  private get orderedActions() {
    return this.actions
      .sort((a, b) => +a.createdAt < +b.createdAt ? 1 : -1)
      .slice(0, this.displayableAmount);
  }

}
