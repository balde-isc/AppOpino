import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage, PodometerPage } from '../pages/index.pages';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
import { SettingsProvider } from '../providers/settings/settings';
import { TodoService } from '../providers/settings/todo-service';
import { SettingsPage } from '../pages/settings/settings';
import { Pedometer } from '@ionic-native/pedometer';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MapPage,
    PodometerPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCyzzVSXiEPk4hVgX0CIdh_-sZ1MNNsp8'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MapPage,
    PodometerPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    Pedometer,
    Geolocation,
    TodoService
  ]
})
export class AppModule {}
