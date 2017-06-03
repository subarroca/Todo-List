import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage/es2015";
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HistoryActionService } from "../providers/history-action.service";
import { LocalTodoService } from "../providers/local-todo.service";
import { TodoListPage } from "../pages/todo-list/todo-list";
import { TodoListPageModule } from "../pages/todo-list/todo-list.module";
import { TodoSectionPageModule } from "../pages/todo-section/todo-section.module";
import { HistoryActionPageModule } from "../pages/history-action/history-action.module";
import { ApiTodoService } from "../providers/api-todo.service";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TodoListPageModule,
    TodoSectionPageModule,
    HistoryActionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HistoryActionService,
    LocalTodoService,
    ApiTodoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
