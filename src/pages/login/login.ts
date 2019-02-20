import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Shared } from '../../providers/shared';
import { Api } from '../../providers/api/api';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController,
    public translateService: TranslateService
    , public api: Api, public shared: Shared, formBuilder: FormBuilder, private storage: Storage) {
    this.registerForm = formBuilder.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      rememberme: [false]
    });
  }

  validate(): boolean {
    if (this.registerForm.valid) {
      return true;
    }

    // figure out the error message
    let errorMsg = '';

    // validate each field
    let passcontrol = this.registerForm.controls['password'];
    let phonecontrol = this.registerForm.controls['phone'];


    if (!phonecontrol.valid) {
      if (phonecontrol.errors['required']) {
        errorMsg = this.translateService.instant('needphone');
      } else if (phonecontrol.errors['minlength']) {
        errorMsg = this.translateService.instant('minphone');
      }
      else if (phonecontrol.errors['maxlength']) {
        errorMsg = this.translateService.instant('maxphone');
      }
    } else if (!passcontrol.valid) {
      if (passcontrol.errors['required']) {
        errorMsg = this.translateService.instant('needpassword');
      } else if (passcontrol.errors['minlength']) {
        errorMsg = this.translateService.instant('minpassword');
      }
    }
    this.shared.showAlert(errorMsg)
    console.log(errorMsg)
    return false;
  }

  login() {
    // this.navCtrl.setRoot(TabspatientPage);
    /*if (this.validate()) {
      this.shared.showLoading(this.translateService.instant('loading'));
      let body = { "username": this.registerForm.value.phone, "password": this.registerForm.value.password };
      let userDetails;
      let seq = this.api.authpost(this.api.loginUrl, body, true);
      seq.map(res => res.json()).subscribe(res => {
        if (res.key) {
          this.shared.loggedIn(res.key, 'login');
          this.api.authget1(this.api.loginUserDetails).map(resp => resp.json()).subscribe(resp => {
            this.shared.hideLoading();
            this.storage.set('userEntity', resp.entity_id + "~" + resp.entity_type);
            localStorage.setItem('loginType', 'patient');
            this.navCtrl.setRoot(TabspatientPage);
          }, err => {
            console.error('ERROR', err)
            this.shared.hideLoading();
            if (err.status === 403) {
              this.shared.ShowToast("CSRF Failed:  Forbidden Issue");
            } else {
              this.shared.ShowToast(err);
            }
          });
        } else {
          this.shared.hideLoading();
          this.shared.ShowToast(this.translateService.instant('errorlogin'));
        }
        if (this.registerForm.value.rememberme) {
          this.storage.set('rememberme', true);
          this.storage.set('userdata', this.registerForm.value.phone + "~" + this.registerForm.value.password);
        } else {
          this.storage.clear();
        }

      }, err => {
        console.error('ERROR', err)
        this.shared.hideLoading();
        if (err.status === 403) {
          this.shared.ShowToast("CSRF Failed:  Forbidden Issue");
        } else if (err.status === 400) {
          this.shared.ShowToast("¡Ups! verifica tu usuario o contraseña");
        } else {
          this.shared.ShowToast(err);
        }
      });
    } */
  }

  openForgotpasswordModal() {

    // const myModalOptions: ModalOptions = {
    //   showBackdrop: true,
    //   enableBackdropDismiss: false
    // };
    // const myModal: Modal = this.modal.create(ModalforgotpasswordPage, myModalOptions);
    // myModal.present();
  }

  ngOnInit() {
    /*this.shared.clearStroage();
    this.shared.showLoading(this.translateService.instant('loading'));
    this.api.clearSession().map(res => res).subscribe(sessionClear => {
      this.shared.hideLoading();
      this.storage.get('rememberme').then((val) => {
        if (val) {
          this.storage.get('userdata').then((data) => {
            let dataSplit = data.split("~");
            this.registerForm.patchValue({
              "phone": dataSplit[0],
              "password": dataSplit[1],
              "rememberme": true
            });
            // this.login();
          });
        }
      });
    }, err => {
      this.shared.hideLoading();
    });*/
  }

  ionViewCanEnter() {
      }
}
