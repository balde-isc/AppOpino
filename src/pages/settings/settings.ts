import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  goal: number;  
  constructor(public viewCtrl: ViewController, public settings: SettingsProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.goal = this.settings.getGoal();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  update() {
    let value = Math.trunc(this.goal);
    this.settings.setGoal(value);
    this.viewCtrl.dismiss(true);
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
