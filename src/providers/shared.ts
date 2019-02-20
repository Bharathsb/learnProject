
import { LoadingController, AlertController, ToastController } from 'ionic-angular'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Api } from '../providers/api/api';
import { TranslateService } from '@ngx-translate/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Shared {

    public user
    public loader
    public celphone//='112233445'
    public specialitylist = []
    public districtlist = [];
    public clinicInfo: any;
    public doctorInfo: any;
    public userEntityId;
    constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController
        , public toastCtrl: ToastController, public storage: Storage, public api: Api, public translateService: TranslateService) {

    }

    filtersearch(items, searchTerm) {

        return items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

    filterItems(items, conditions) {
        return items.filter(item => {
            for (let field in conditions) {
                if (item[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    }
    loadspecialities() {
        // this.showLoading( this.translateService.instant('loading'))
        var seq = this.api.get(this.api.apispecialities)
        seq.map(res => { return res.json(); }).subscribe(res => {
            //   this.hideLoading()
            this.specialitylist = res.results
        }, err => {
            //   this.hideLoading()
            this.ShowToast(this.translateService.instant('Failedloading'))
            console.error('ERROR', err);
        });
    }
    loaddistricts() {
        // this.showLoading( this.translateService.instant('loading'))
        var seq = this.api.get(this.api.apiGetdistricts)
        seq.map(res => { return res.json(); }).subscribe(res => {
            // this.hideLoading()
            this.districtlist = res.results;
        }, err => {
            // this.hideLoading()
            this.ShowToast(this.translateService.instant('Failedloading'))
            console.error('ERROR', err);
        });
    }
    setphone(phone) {
        this.storage.set('phone', phone);
        this.celphone = phone
    }
    loggedIn(user, type) {
        this.user = user;
        this.storage.set('userdata', JSON.stringify(this.user));
        if (type == 'register') this.storage.set('validationsms', false);
        else this.storage.set('validationsms', true);
        localStorage.setItem("key", this.user);
        localStorage.setItem("logindate", new Date().toString());
    }
    //show loading pop up 
    showLoading(txt) {
        this.loader = this.loadingCtrl.create({ content: txt });
        this.loader.present();
    }

    //hide loading pop up 
    hideLoading() { this.loader.dismiss(); }

    //show alert confirmation
    showAlert(txt) {
        let alert = this.alertCtrl.create({ title: 'alerta', subTitle: txt, buttons: ['ok'] });
        alert.present();
    }

    //show toast  
    ShowToast(messaage) {
        let toast = this.toastCtrl.create({ message: messaage, duration: 2000, position: 'bottom' });
        toast.present();
    }

    clearStroage() {
        sessionStorage.clear();
        // localStorage.clear();
        localStorage.removeItem("currentPage");
        localStorage.removeItem("key");
        localStorage.removeItem("loginType");
        localStorage.removeItem("logindate");
        this.removeCookies();
    }

    removeCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    setCurrentPage(pageName) {
        // this.storage.set('currentPage', pageName);
        localStorage.setItem('currentPage', pageName);
    }

    getCurrentPage(): any {
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
    }

    loadClinicInfo() {
        this.loadUserEntityId();
        this.api.get(this.api.getClinicInfo).map(res => { return res.json(); }).subscribe(res => {
            this.clinicInfo = res;
        }, err => {
            this.ShowToast(this.translateService.instant('Failedloading'))
            console.error('ERROR', err);
        });
    }

    loadDoctorInfo() {
        this.loadUserEntityId();
        this.api.get(this.api.getDoctorInfo).map(res => { return res.json(); }).subscribe(res => {
            this.doctorInfo = res;
        }, err => {
            this.ShowToast(this.translateService.instant('Failedloading'))
            console.error('ERROR', err);
        });
    }

    private loadUserEntityId() {
        this.storage.get('userEntity').then((data) => {
            let dataSplit = data.split("~");
            this.userEntityId = (dataSplit.length > 0) ? Number(dataSplit[0]) : 1;
        });
    }

    convertJSONtoStringEncodeFormat(srcjson) {
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
            if (i < (keys.length - 1)) urljson += "&";
        }
        return urljson;
    }
    
}