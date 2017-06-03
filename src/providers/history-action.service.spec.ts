import { TestBed, inject } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { HistoryAction } from './../models/history-action';
import { HistoryActionService } from './history-action.service';



const action1 = new HistoryAction({
  title: 'action1'
});
const action2 = new HistoryAction({
  title: 'action2'
});
const action3 = new HistoryAction({
  title: 'action3'
});
const action4 = new HistoryAction({
  title: 'action4'
});
const action5 = new HistoryAction({
  title: 'action5'
});
const action6 = new HistoryAction({
  title: 'action6'
});

describe('Provider: HistoryAction', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot()
      ],
      providers: [
        HistoryActionService
      ]
    })
  });


  it('has no actions on start',
    inject([HistoryActionService], (service) => {
      expect(service.actions.length).toEqual(0);
    }));

  it('adds an action',
    inject([HistoryActionService], (service) => {
      service.addAction(action1);

      expect(service.actions[0]).toEqual(action1);
    }));

  it('returns a short ordered list',
    inject([HistoryActionService], (service) => {
      // TODO: find a better way to work with dates in test
      action1.createdAt = new Date(1);
      action2.createdAt = new Date(2);
      action3.createdAt = new Date(3);
      action4.createdAt = new Date(4);
      action5.createdAt = new Date(5);
      action6.createdAt = new Date(6);

      service.addAction(action1);
      service.addAction(action2);
      service.addAction(action3);
      service.addAction(action4);
      service.addAction(action5);
      service.addAction(action6);

      expect(service.orderedActions.length).toEqual(5);
      expect(service.orderedActions[0]).toBe(action6);
      expect(service.orderedActions[4]).toBe(action2);
    }));
});