import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TodoService } from "../../providers/settings/todo-service";
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {


  like : string = "";
  dislike: string = "";
  title: string = 'My first AGM project';
  lat: number = 20.5943228;
  lng: number = -100.4073663;
  locacion: Object;
  testRadioOpen: boolean;
  testRadioResult;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public todoService: TodoService,private geolocation: Geolocation) {
  }
  
  doRadio(opinion) {
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
      let motivo = data;
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        this.lat = data.coords.latitude
        this.lng = data.coords.longitude
       });      
       this.locacion = {
            latitude: this.lat,
            longitude: this.lng 
          };
      this.todoService.ingresar(opinion, motivo ,this.locacion).subscribe(
        err => {
          console.log(err);
      }

      );
      console.log(opinion, motivo, this.locacion)
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
