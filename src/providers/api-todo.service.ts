import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import { TodoItem } from './../models/todo-item';
// import { HistoryAction } from './../models/history-action';
// import { HistoryActionService } from './history-action.service';


@Injectable()
export class ApiTodoService {
  // TODO: move this to a safer place
  baseURL: 'https://adrian.howaboutsales.com';
  username: 'frontendtest@howaboutsales.com';
  password: 'Frontend2017';

  token: string;


  constructor(
    // private historyActionService: HistoryActionService,
    private http: Http
  ) {
    this.baseURL = 'https://adrian.howaboutsales.com';
    this.login();
  }

  private login() {
    this.http.get(`${this.baseURL}/api/login/getToken`)
      .subscribe(res => console.log(res.json()));
  }

}
