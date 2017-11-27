import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  
  testRadioOpen: boolean;
  testRadioResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }
  

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Opino andando');

    alert.addInput({
      type: 'radio',
      label: 'Infrastructura',
      value: 'infrastructura',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Seguridad',
      value: 'seguridad'
    });

    alert.addInput({
      type: 'radio',
      label: 'Vialidad',
      value: 'vialidad'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }


}
