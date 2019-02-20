import { Component } from '@angular/core';
import { Platform, Config, App, AlertController, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LandingPage } from '../pages/landing/landing';
import { TranslateService } from '@ngx-translate/core';
import { Api } from '../providers/api/api';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Shared } from '../providers/shared';
import * as moment from 'moment';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LandingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public translate: TranslateService,
    public config: Config, public api: Api, public androidPermissions: AndroidPermissions,
    public app: App, private alertCtrl: AlertController, private shared: Shared, public ionicApp: IonicApp) {
    this.initTranslate();

    // platform.ready().then(() => {
    //   statusBar.styleDefault();
    //   statusBar.overlaysWebView(false);
    //   statusBar.backgroundColorByHexString('#004D99');
    //   splashScreen.hide();
    //   androidPermissions.requestPermissions(
    //     [
    //       androidPermissions.PERMISSION.CALL_PHONE,
    //     ]
    //   );
    //   platform.registerBackButtonAction(() => {
    //     let view = this.shared.getCurrentPage();
    //     let overlayview = this.ionicApp._overlayPortal._views[0];
    //     let nav = app.getActiveNavs()[0];
    //     let activeView = nav.getActive();
    //     const terminationList :any[] = ["Tabclinic1Page","Tabdoctor1Page"];
    //     const backToHomePageList :any = ["Tabclinic2Page","Tabclinic3Page","Tabdoctor2Page","Tabdoctor3Page"];
    //     if(overlayview && overlayview.dismiss){
    //       overlayview.dismiss();
    //     }else if (terminationList.findIndex(value => (value === view)) !== -1) {
    //         const alerts = this.alertCtrl.create({
    //         // title: 'App termination',
    //         message: this.translate.instant("Do you want to close the app?"),
    //         buttons: [{
    //           text: this.translate.instant("Cancel"),
    //           role: 'cancel',
    //           handler: () => {
    //             console.log('Application exit prevented!');
    //           }
    //         }, {
    //           text: this.translate.instant("Close App"),
    //           handler: () => {
    //             platform.exitApp();
    //           }
    //         }]
    //       });
    //       alerts.present();
    //     } else if (backToHomePageList.findIndex(value => (value === view)) !== -1) {
    //       nav.parent.select(0);
    //     } else if (view === "landingpage") {
    //       platform.exitApp();
    //     } else {
    //       if (nav.canGoBack()) {
    //         nav.pop();
    //       } else {
    //         activeView.dismiss();
    //       }
    //     }
    //   }, 10);
    // });
  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    // this.translate.setDefaultLang('sp');
    // this.translate.setDefaultLang('sp');
    // this.translate.use('en');
    // if (this.translate.getBrowserLang() !== undefined) {
    //   this.translate.use(this.translate.getBrowserLang());
    // } else {
    //   this.translate.use('en'); // Set your language here
    // }
    this.translate.use('en');

    this.translate.get(['back']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.back);
    });
  }
}
