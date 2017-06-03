import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage/es2015";

import { MyApp } from './app.component';
import { HistoryActionService } from "../providers/history-action.service";
import { LocalTodoService } from "../providers/local-todo.service";
import { TodoListPage } from "../pages/todo-list/todo-list";
import { TodoListPageModule } from "../pages/todo-list/todo-list.module";
import { TodoSectionPageModule } from "../pages/todo-section/todo-section.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TodoListPageModule,
    TodoSectionPageModule
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
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
