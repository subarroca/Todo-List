import { TestBed, inject } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { TodoSection } from './../models/todo-section';
import { LocalTodoService } from './local-todo.service';



describe('Provider: LocalTodo', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot()
      ],
      providers: [
        LocalTodoService
      ]
    })
  });


  it('has no sections on start',
    inject([LocalTodoService], (service) => {
    }));

  it('adds a section',
    inject([LocalTodoService], (service) => {
    }));

  it('removes a section',
    inject([LocalTodoService], (service) => {
    }));

  it('keeps sections when removing a non existing one',
    inject([LocalTodoService], (service) => {
    }));

  it('saves todos to localStorage',
    inject([LocalTodoService], (service) => {
    }));

  it('recovers todos from localStorage',
    inject([LocalTodoService], (service) => {
    }));
});