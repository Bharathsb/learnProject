import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegistermainPage } from '../pages/registermain/registermain';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from '../providers/api/api';
import { Shared } from '../providers/shared';
import { Search } from '../pipes/search/search';
import { ArrayFilterPipe } from '../pipes/array-filter.pipe';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AndroidPermissions } from '@ionic-native/android-permissions';

import { AppAvailability } from '@ionic-native/app-availability';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    RegistermainPage,

    Search, ArrayFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,


    LoginPage,
    RegistermainPage,

    // PopOverPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Api,
    Shared,
    AndroidPermissions,
    AppAvailability

  ]
})
export class AppModule { }

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}






