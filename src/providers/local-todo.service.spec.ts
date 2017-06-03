import { TestBed, inject } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { TodoSection } from './../models/todo-section';
import { LocalTodoService } from './local-todo.service';
import { HistoryActionService } from './history-action.service';



describe('Provider: LocalTodo', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot()
      ],
      providers: [
        LocalTodoService,
        HistoryActionService
      ]
    })
  });


  it('adds a section',
    inject([LocalTodoService], (service) => {
      service.addSection('section1');

      expect(service.sections[0].title).toEqual('section1');
    }));

  it('removes a section',
    inject([LocalTodoService], (service) => {
      service.addSection('section1');
      service.removeSection(service.sections[0]);

      expect(service.sections.length).toEqual(0);
    }));

  it('keeps sections when removing a non existing one',
    inject([LocalTodoService], (service) => {
      service.addSection('section1');
      service.removeSection(new TodoSection({ title: 'section2' }));

      expect(service.sections.length).toEqual(1);
      expect(service.sections[0].title).toBe('section1');
    }));

  // TODO: find a way to test local storage
  // it('saves todos to localStorage',
  //   inject([LocalTodoService], (service) => {
  //   }));

  // it('recovers todos from localStorage',
  //   inject([LocalTodoService], (service) => {
  //   }));

  // it('loads sections on start',
  //   inject([LocalTodoService], (service) => {
  //   }));
});