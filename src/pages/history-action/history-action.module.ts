import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryActionPage } from './history-action';

@NgModule({
  declarations: [
    HistoryActionPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryActionPage),
  ],
  exports: [
    HistoryActionPage
  ]
})
export class HistoryActionPageModule {}
