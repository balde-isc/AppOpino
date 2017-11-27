import { Component } from '@angular/core';

import { MapPage, PodometerPage } from '../../pages/index.pages';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = PodometerPage;

  constructor() {

  }
}
