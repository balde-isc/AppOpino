import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PodometerPage } from './podometer';

@NgModule({
  declarations: [
    PodometerPage,
  ],
  imports: [
    IonicPageModule.forChild(PodometerPage),
  ],
})
export class PodometerPageModule {}
