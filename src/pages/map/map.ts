import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  
  title: string = 'My first AGM project';
  lat: number = 21.1348554;
  lng: number = -101.677241;
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
      //  this.todoService.add(data.addInput).subscribe();
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
