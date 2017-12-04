import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ModalController } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';
 
import { SettingsProvider } from '../../providers/settings/settings';
import { SettingsPage } from '../settings/settings';
/**
 * Generated class for the PodometerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-podometer',
  templateUrl: 'podometer.html',
})
export class PodometerPage {
  steps: number = 0;
  goal: number;
  percentage: number;
  constructor(private ref: ChangeDetectorRef, public platform: Platform, public pedometer: Pedometer, public modalCtrl: ModalController, public settings: SettingsProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.pedometer.startPedometerUpdates()
    .subscribe((data) => {
        this.steps = data.numberOfSteps;
        this.setPercentage();
        this.ref.detectChanges();
      });

  this.goal = this.settings.getGoal();
  this.setPercentage();
}

setPercentage() {
  this.percentage = (this.steps / this.goal) * 100;
}

showOptions() {
  let modal = this.modalCtrl.create(SettingsPage);
  modal.onDidDismiss((result) => {
    if (result) {
      this.goal = result;
    }
  })
  modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodometerPage');
  }

}
