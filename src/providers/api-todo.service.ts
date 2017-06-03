import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import { TodoItem } from './../models/todo-item';
// import { HistoryAction } from './../models/history-action';
// import { HistoryActionService } from './history-action.service';


@Injectable()
export class ApiTodoService {
  baseURL: 'https://adrian.howaboutsales.com';

  token: string;


  constructor(
    // private historyActionService: HistoryActionService,
    private http: Http
  ) {
    this.baseURL = 'https://adrian.howaboutsales.com';
    this.login();
  }

  private login() {
    // TODO: move this to a safer place
    const username = 'frontendtest@howaboutsales.com';
    const password = 'Frontend2017';

    this.http.post(`${this.baseURL}/api/login/getToken`, {
      username: username,
      password: password
    })
      .subscribe(res => this.token = res.json().token);
  }

}
