import { TestBed, inject } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { HistoryAction } from './../models/history-action';
import { HistoryActionService } from './history-action.service';



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
    }));

  it('adds an action',
    inject([HistoryActionService], (service) => {
    }));

  it('returns a short ordered list',
    inject([HistoryActionService], (service) => {
    }));
});