import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TranslateService } from '@ngx-translate/core';
import { Shared } from '../../providers/shared';
import { RegistermainPage } from '../registermain/registermain';
import * as moment from 'moment';

/**
 * Generated class for the LandingPage page.   ...
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  specialityselect
  districtselect
  speciality = ''
  district = ''
  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: Shared,
    public translateService: TranslateService, public modalCtrl: ModalController) {

  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }
  gotoRegister() {
    this.navCtrl.push(RegistermainPage);
  }

  ionViewDidEnter() {
    // this.shared.setCurrentPage("landingpage");
  }
}

