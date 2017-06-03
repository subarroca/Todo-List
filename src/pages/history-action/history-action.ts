import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryActionService } from "../../providers/history-action.service";

/**
 * Generated class for the HistoryActionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history-action',
  templateUrl: 'history-action.html',
})
export class HistoryActionPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public historyAction: HistoryActionService
  ) { }

}
