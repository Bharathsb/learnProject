webpackJsonp([4],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registermain_registermain__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LandingPage page.   ...
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LandingPage = (function () {
    function LandingPage(navCtrl, navParams, shared, translateService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shared = shared;
        this.translateService = translateService;
        this.modalCtrl = modalCtrl;
        this.speciality = '';
        this.district = '';
    }
    LandingPage.prototype.gotoLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    LandingPage.prototype.gotoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registermain_registermain__["a" /* RegistermainPage */]);
    };
    LandingPage.prototype.ionViewDidEnter = function () {
        // this.shared.setCurrentPage("landingpage");
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"D:\ionic-learn\Demo\project\src\pages\landing\landing.html"*/'\n\n<ion-content class="landing" padding>\n\n\n\n<div align="text-left">\n\n	<img width="100px" src="assets/img/logo_white.png"/>\n\n</div>\n\n\n\n<!-- <ion-grid margin-top-100> -->\n\n		  \n\n		<ion-row class="margin-top-100">\n\n			<p class="font-rem-big">\n\n				Tu agenda y tus pacientes\n\n				<b>SIEMPRE A TU ALCANCE</b></p>\n\n		</ion-row>\n\n\n\n	  		  \n\n	\n\n</ion-content>\n\n\n\n<ion-footer text-center padding>\n\n\n\n	  <button ion-button margin-right color="secondary" (click)="gotoLogin();"> {{ \'Login\' | translate }}  \n\n      </button>\n\n\n\n      <button ion-button margin-left (click)="gotoRegister();"> {{ \'Register\' | translate }} \n\n      </button>\n\n	\n\n</ion-footer>'/*ion-inline-end:"D:\ionic-learn\Demo\project\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_shared__["a" /* Shared */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, modal, translateService, api, shared, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.translateService = translateService;
        this.api = api;
        this.shared = shared;
        this.storage = storage;
        this.registerForm = formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(9)])],
            rememberme: [false]
        });
    }
    LoginPage.prototype.validate = function () {
        if (this.registerForm.valid) {
            return true;
        }
        // figure out the error message
        var errorMsg = '';
        // validate each field
        var passcontrol = this.registerForm.controls['password'];
        var phonecontrol = this.registerForm.controls['phone'];
        if (!phonecontrol.valid) {
            if (phonecontrol.errors['required']) {
                errorMsg = this.translateService.instant('needphone');
            }
            else if (phonecontrol.errors['minlength']) {
                errorMsg = this.translateService.instant('minphone');
            }
            else if (phonecontrol.errors['maxlength']) {
                errorMsg = this.translateService.instant('maxphone');
            }
        }
        else if (!passcontrol.valid) {
            if (passcontrol.errors['required']) {
                errorMsg = this.translateService.instant('needpassword');
            }
            else if (passcontrol.errors['minlength']) {
                errorMsg = this.translateService.instant('minpassword');
            }
        }
        this.shared.showAlert(errorMsg);
        console.log(errorMsg);
        return false;
    };
    LoginPage.prototype.login = function () {
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
    };
    LoginPage.prototype.openForgotpasswordModal = function () {
        // const myModalOptions: ModalOptions = {
        //   showBackdrop: true,
        //   enableBackdropDismiss: false
        // };
        // const myModal: Modal = this.modal.create(ModalforgotpasswordPage, myModalOptions);
        // myModal.present();
    };
    LoginPage.prototype.ngOnInit = function () {
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
    };
    LoginPage.prototype.ionViewCanEnter = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionic-learn\Demo\project\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n		<ion-title>{{ \'Login\' | translate }} </ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<form [formGroup]="registerForm">\n		<div class="margin-top-20" margin align="text-center">\n			<img class="img-center" src="assets/img/logoback2.png" />\n		</div>\n\n		<ion-row margin-top>\n			<ion-item class="margin-top-50">\n				<ion-label floating>\n					<ion-icon name="person" margin-right></ion-icon>{{ \'Mobile\' | translate }}</ion-label>\n				<ion-input type="tel" formControlName="phone"></ion-input>\n			</ion-item>\n		</ion-row>\n\n		<ion-row margin-top>\n			<ion-item>\n				<ion-label floating>\n					<ion-icon name="lock" margin-right></ion-icon>{{ \'Password\' | translate }}</ion-label>\n				<ion-input type="password" formControlName="password"></ion-input>\n			</ion-item>\n		</ion-row>\n		<ion-row margin-top class="login-checkbox">\n			<ion-item >\n				<ion-checkbox formControlName="rememberme"></ion-checkbox>\n				<ion-label>{{ \'Remember me\' | translate }}</ion-label>\n			</ion-item>\n		</ion-row>\n		<ion-row>\n			<button ion-button color="secondary" block margin-top (click)="login();">\n				{{ \'Login\' | translate }}\n			</button>\n		</ion-row>\n		<!-- <div text-center>\n			<p> {{ \'Forgotpassword\' | translate }} ?\n				<a (click)="openForgotpasswordModal()"> {{ \'Click\' | translate }} {{ \'here\' | translate }} </a>\n			</p>\n		</div> -->\n	</form>\n</ion-content>'/*ion-inline-end:"D:\ionic-learn\Demo\project\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__providers_shared__["a" /* Shared */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistermainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistermainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegistermainPage = (function () {
    function RegistermainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistermainPage.prototype.gotoRegisterDoctor = function () {
        //  this.navCtrl.push(DoctorsmsPage);
        //this.navCtrl.push(RegisterdoctorPage);
    };
    RegistermainPage.prototype.gotoRegisterPatient = function () {
        // this.navCtrl.push(PatientsmsPage); 
        //this.navCtrl.push(RegisterpatientPage);
    };
    RegistermainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistermainPage');
    };
    RegistermainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registermain',template:/*ion-inline-start:"D:\ionic-learn\Demo\project\src\pages\registermain\registermain.html"*/'<!--\n  Generated template for the RegistermainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>   {{ \'Register\' | translate }} {{ \'here\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n\n  <div align="text-center">\n    <img class="img-center" src="assets/img/logoback.png"/>\n  </div>\n\n  <p text-center padding > <font size="4">  {{ \'asktype\' | translate }}</font></p>\n\n  <div text-center padding>\n    <button ion-button color="secondary" (click)="gotoRegisterDoctor();">\n        {{ \'Doctor\' | translate }}\n    </button> \n\n    <button ion-button color="secondary" (click)="gotoRegisterPatient();">\n        {{ \'Patient\' | translate }}\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic-learn\Demo\project\src\pages\registermain\registermain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RegistermainPage);
    return RegistermainPage;
}());

//# sourceMappingURL=registermain.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgotpassword/forgotpassword.module": [
		334,
		0
	],
	"../pages/landing/landing.module": [
		335,
		3
	],
	"../pages/login/login.module": [
		336,
		2
	],
	"../pages/registermain/registermain.module": [
		337,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registermain_registermain__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_shared__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_search__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_array_filter_pipe__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_locales_es__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_android_permissions__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_availability__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























Object(__WEBPACK_IMPORTED_MODULE_20__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_19__angular_common_locales_es__["a" /* default */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registermain_registermain__["a" /* RegistermainPage */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_search_search__["a" /* Search */], __WEBPACK_IMPORTED_MODULE_17__pipes_array_filter_pipe__["a" /* ArrayFilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registermain/registermain.module#RegistermainPageModule', name: 'RegistermainPage', segment: 'registermain', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registermain_registermain__["a" /* RegistermainPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_15__providers_shared__["a" /* Shared */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_availability__["a" /* AppAvailability */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_shared__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, config, api, androidPermissions, app, alertCtrl, shared, ionicApp) {
        this.translate = translate;
        this.config = config;
        this.api = api;
        this.androidPermissions = androidPermissions;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.shared = shared;
        this.ionicApp = ionicApp;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_landing_landing__["a" /* LandingPage */];
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
    MyApp.prototype.initTranslate = function () {
        var _this = this;
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
        this.translate.get(['back']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.back);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-learn\Demo\project\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic-learn\Demo\project\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_shared__["a" /* Shared */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Search = (function () {
    function Search() {
    }
    Search.prototype.transform = function (list, searchTerm) {
        if (searchTerm && searchTerm != '') {
            searchTerm = searchTerm.toUpperCase();
            return list.filter(function (item) {
                return item.name.toUpperCase().indexOf(searchTerm) > -1;
            });
        }
        else {
            return list;
        }
    };
    Search = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search',
            pure: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Search);
    return Search;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayFilterPipe = (function () {
    function ArrayFilterPipe() {
    }
    ArrayFilterPipe.prototype.transform = function (items, conditions) {
        if (items != undefined) {
            return items.filter(function (item) {
                for (var field in conditions) {
                    if (item[field] !== conditions[field]) {
                        return false;
                    }
                }
                return true;
            });
        }
    };
    ArrayFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: "filter",
            pure: false
        })
    ], ArrayFilterPipe);
    return ArrayFilterPipe;
}());

//# sourceMappingURL=array-filter.pipe.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Shared = (function () {
    function Shared(loadingCtrl, alertCtrl, toastCtrl, storage, api, translateService) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.api = api;
        this.translateService = translateService;
        this.specialitylist = [];
        this.districtlist = [];
    }
    Shared.prototype.filtersearch = function (items, searchTerm) {
        return items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    Shared.prototype.filterItems = function (items, conditions) {
        return items.filter(function (item) {
            for (var field in conditions) {
                if (item[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    };
    Shared.prototype.loadspecialities = function () {
        var _this = this;
        // this.showLoading( this.translateService.instant('loading'))
        var seq = this.api.get(this.api.apispecialities);
        seq.map(function (res) { return res.json(); }).subscribe(function (res) {
            //   this.hideLoading()
            _this.specialitylist = res.results;
        }, function (err) {
            //   this.hideLoading()
            _this.ShowToast(_this.translateService.instant('Failedloading'));
            console.error('ERROR', err);
        });
    };
    Shared.prototype.loaddistricts = function () {
        var _this = this;
        // this.showLoading( this.translateService.instant('loading'))
        var seq = this.api.get(this.api.apiGetdistricts);
        seq.map(function (res) { return res.json(); }).subscribe(function (res) {
            // this.hideLoading()
            _this.districtlist = res.results;
        }, function (err) {
            // this.hideLoading()
            _this.ShowToast(_this.translateService.instant('Failedloading'));
            console.error('ERROR', err);
        });
    };
    Shared.prototype.setphone = function (phone) {
        this.storage.set('phone', phone);
        this.celphone = phone;
    };
    Shared.prototype.loggedIn = function (user, type) {
        this.user = user;
        this.storage.set('userdata', JSON.stringify(this.user));
        if (type == 'register')
            this.storage.set('validationsms', false);
        else
            this.storage.set('validationsms', true);
        localStorage.setItem("key", this.user);
        localStorage.setItem("logindate", new Date().toString());
    };
    //show loading pop up 
    Shared.prototype.showLoading = function (txt) {
        this.loader = this.loadingCtrl.create({ content: txt });
        this.loader.present();
    };
    //hide loading pop up 
    Shared.prototype.hideLoading = function () { this.loader.dismiss(); };
    //show alert confirmation
    Shared.prototype.showAlert = function (txt) {
        var alert = this.alertCtrl.create({ title: 'alerta', subTitle: txt, buttons: ['ok'] });
        alert.present();
    };
    //show toast  
    Shared.prototype.ShowToast = function (messaage) {
        var toast = this.toastCtrl.create({ message: messaage, duration: 2000, position: 'bottom' });
        toast.present();
    };
    Shared.prototype.clearStroage = function () {
        sessionStorage.clear();
        // localStorage.clear();
        localStorage.removeItem("currentPage");
        localStorage.removeItem("key");
        localStorage.removeItem("loginType");
        localStorage.removeItem("logindate");
        this.removeCookies();
    };
    Shared.prototype.removeCookies = function () {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };
    Shared.prototype.setCurrentPage = function (pageName) {
        // this.storage.set('currentPage', pageName);
        localStorage.setItem('currentPage', pageName);
    };
    Shared.prototype.getCurrentPage = function () {
        /*let page = undefined;
        this.storage.get('currentPage').then((val) => {
            if (val) {
                return val;
            } else {
                return page;
            }
        });
        return page; */
        return localStorage.getItem('currentPage');
    };
    Shared.prototype.loadClinicInfo = function () {
        var _this = this;
        this.loadUserEntityId();
        this.api.get(this.api.getClinicInfo).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.clinicInfo = res;
        }, function (err) {
            _this.ShowToast(_this.translateService.instant('Failedloading'));
            console.error('ERROR', err);
        });
    };
    Shared.prototype.loadDoctorInfo = function () {
        var _this = this;
        this.loadUserEntityId();
        this.api.get(this.api.getDoctorInfo).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.doctorInfo = res;
        }, function (err) {
            _this.ShowToast(_this.translateService.instant('Failedloading'));
            console.error('ERROR', err);
        });
    };
    Shared.prototype.loadUserEntityId = function () {
        var _this = this;
        this.storage.get('userEntity').then(function (data) {
            var dataSplit = data.split("~");
            _this.userEntityId = (dataSplit.length > 0) ? Number(dataSplit[0]) : 1;
        });
    };
    Shared.prototype.convertJSONtoStringEncodeFormat = function (srcjson) {
        if (typeof srcjson !== "object")
            if (typeof console !== "undefined") {
                console.log("\"srcjson\" is not a JSON object");
                return null;
            }
        var u = encodeURIComponent;
        var urljson = "";
        var keys = Object.keys(srcjson);
        for (var i = 0; i < keys.length; i++) {
            urljson += u(keys[i]) + "=" + u(srcjson[keys[i]]);
            if (i < (keys.length - 1))
                urljson += "&";
        }
        return urljson;
    };
    Shared = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], Shared);
    return Shared;
}());

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        // url: string = 'http://desa.doctocliq.com/api-v1/';
        // ImageUrl: string = 'http://desa.doctocliq.com/';
        // url: string = '35.229.16.214/api-v1/';
        // ImageUrl: string = '35.229.16.214/';
        this.ImageUrl = 'http://www.doctocliq.com/';
        this.apipatients = 'patients/';
        this.apidoctors = 'doctors/';
        this.apiresend_sms = 'resend_sms_register/';
        this.apiconfirm = 'confirm/';
        this.apiRegdoctor = 'register_doctor/';
        this.apiRegpatient = "register_patient/";
        this.apiGetdistricts = "districts/";
        this.apispecialities = "specialities";
        this.apidoctors_establishments = "doctors_establishments/list_by_search/?";
        this.apiprice = "reasons/list_by_establishment/?establishment_id=";
        this.apireason = "reasons/list_by_establishment/";
        this.apicreatappointments = "/appointments/";
        this.apischedule = "schedules/get_work_schedule_short_view/?establishment_id=";
        this.createPatient = "clinics/create_patient/";
        this.createAppointment = "clinics/create_appointment/";
        this.apiDoctorList = "clinics/get_doctors/";
        this.apiAppointments = "clinics/get_appointment/";
        this.getPaitentList = "clinics/get_patients/?simple=1";
        this.apiPaitentList = "clinics/get_patients/";
        this.apiPaitentDetail = "clinics/get_patient/";
        this.deleteAppointment = "clinics/remove_appointment/";
        this.updateAppoinmetnt = "clinics/update_appointment/";
        this.getClinicInfo = "clinics/get_clinic_info";
        this.doctorApiiCreatePatient = "doctors/create_patient/";
        this.doctorApiCreateAppointment = "doctors/create_appointment/";
        this.doctorApiAppointments = "doctors/get_appointment/";
        this.getDoctorsPaitentList = "doctors/get_patient/?simple=1";
        this.doctorApiPaitentList = "doctors/get_patient/";
        this.doctorApiPaitentDetail = "doctors/get_patient/";
        this.doctorApiDeleteAppointment = "doctors/remove_appointment/";
        this.doctorApiUpdateAppoinmetnt = "doctors/update_appointment/";
        this.getEstablishmentInfo = "doctors/get_establishments/";
        this.getDoctorInfo = "doctors/get_doctor_info/";
        // To deploy uncomment below lines and
        // url: string = 'http://www.doctocliq.com/api-v1/';
        // sessionClearUrl: string = "http://www.doctocliq.com/salir/";
        // loginUrl: string ='http://www.doctocliq.com/rest-auth/login/';
        // loginUserDetails: string ='http://www.doctocliq.com/rest-auth/user/';
        // To run local uncomment below lines
        this.url = '/api-v1/';
        this.loginUrl = '/rest-auth/login/';
        this.sessionClearUrl = "/salir/";
        this.loginUserDetails = "/rest-auth/user/";
    }
    Api.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + endpoint, options);
    };
    Api.prototype.getapi = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(endpoint, options);
    };
    Api.prototype.post = function (endpoint, body, options) {
        return this.http.post(this.url + endpoint, body, options);
    };
    Api.prototype.put = function (endpoint, body, options) {
        return this.http.put(this.url + endpoint, body, options);
    };
    Api.prototype.delete = function (endpoint, options) {
        return this.http.delete(this.url + endpoint, options);
    };
    Api.prototype.patch = function (endpoint, body, options) {
        return this.http.put(this.url + endpoint, body, options);
    };
    Api.prototype.authpost = function (endpoint, body, isLogin, options) {
        var url;
        if (!isLogin) {
            var token = localStorage.getItem("key");
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('authorization', 'Token ' + token);
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            url = this.url + endpoint;
        }
        else {
            url = endpoint;
        }
        return this.http.post(url, body, options);
    };
    Api.prototype.authpost1 = function (endpoint, body, options) {
        var url;
        var token = localStorage.getItem("key");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', '*/*');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('authorization', 'Token ' + token);
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        url = this.url + endpoint;
        return this.http.post(url, body, options);
    };
    Api.prototype.authget = function (endpoint, options) {
        var token = localStorage.getItem("key");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('authorization', 'Token ' + token);
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + endpoint, options);
    };
    Api.prototype.authget1 = function (endpoint, options) {
        var token = localStorage.getItem("key");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('authorization', 'Token ' + token);
        options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(endpoint, options);
    };
    Api.prototype.clearSession = function () {
        return this.http.get(this.sessionClearUrl);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map