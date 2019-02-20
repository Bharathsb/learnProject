
import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  // url: string = 'http://desa.doctocliq.com/api-v1/';
  // ImageUrl: string = 'http://desa.doctocliq.com/';

  // url: string = '35.229.16.214/api-v1/';
  // ImageUrl: string = '35.229.16.214/';

  ImageUrl: string = 'http://www.doctocliq.com/';

  apipatients: string = 'patients/'
  apidoctors: string = 'doctors/'
  apiresend_sms: string = 'resend_sms_register/'
  apiconfirm: string = 'confirm/'
  apiRegdoctor: string = 'register_doctor/'
  apiRegpatient: string = "register_patient/"
  apiGetdistricts: string = "districts/"
  apispecialities: string = "specialities"
  apidoctors_establishments: string = "doctors_establishments/list_by_search/?"
  apiprice: string = "reasons/list_by_establishment/?establishment_id="
  apireason: string = "reasons/list_by_establishment/"
  apicreatappointments: string = "/appointments/"
  apischedule: string = "schedules/get_work_schedule_short_view/?establishment_id="

  createPatient: string = "clinics/create_patient/";
  createAppointment: string = "clinics/create_appointment/";
  apiDoctorList: string = "clinics/get_doctors/";
  apiAppointments: string = "clinics/get_appointment/";
  getPaitentList: string = "clinics/get_patients/?simple=1";
  apiPaitentList: string = "clinics/get_patients/";
  apiPaitentDetail: string = "clinics/get_patient/";
  deleteAppointment: string = "clinics/remove_appointment/";
  updateAppoinmetnt: string = "clinics/update_appointment/";
  getClinicInfo: string = "clinics/get_clinic_info";

  doctorApiiCreatePatient: string = "doctors/create_patient/";
  doctorApiCreateAppointment: string = "doctors/create_appointment/";
  doctorApiAppointments: string = "doctors/get_appointment/";
  getDoctorsPaitentList: string = "doctors/get_patient/?simple=1";
  doctorApiPaitentList: string = "doctors/get_patient/";
  doctorApiPaitentDetail: string = "doctors/get_patient/";
  doctorApiDeleteAppointment: string = "doctors/remove_appointment/";
  doctorApiUpdateAppoinmetnt: string = "doctors/update_appointment/";
  getEstablishmentInfo: string = "doctors/get_establishments/";
  getDoctorInfo: string = "doctors/get_doctor_info/";

  // To deploy uncomment below lines and
  // url: string = 'http://www.doctocliq.com/api-v1/';
  // sessionClearUrl: string = "http://www.doctocliq.com/salir/";
  // loginUrl: string ='http://www.doctocliq.com/rest-auth/login/';
  // loginUserDetails: string ='http://www.doctocliq.com/rest-auth/user/';
  
  // To run local uncomment below lines
  url: string = '/api-v1/';
  loginUrl: string = '/rest-auth/login/';
  sessionClearUrl: string = "/salir/";
  loginUserDetails:string = "/rest-auth/user/";

  constructor(public http: Http) {

  }

  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }
    return this.http.get(this.url + endpoint, options);
  }
  getapi(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }
    return this.http.get(endpoint, options);
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.post(this.url + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete(this.url + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(this.url + endpoint, body, options);
  }
  authpost(endpoint: string, body: any, isLogin: boolean, options?: RequestOptions) {
    let url;
    if (!isLogin) {
      let token = localStorage.getItem("key");
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('authorization', 'Token ' + token);
      options = new RequestOptions({ headers: headers });
      url = this.url + endpoint;
    } else {
      url = endpoint;
    }
    return this.http.post(url, body, options);
  }
  authpost1(endpoint: string, body: any, options?: RequestOptions) {
    let url;
    let token = localStorage.getItem("key");
    const headers = new Headers();
    headers.append('Accept','*/*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('authorization', 'Token ' + token);
    options = new RequestOptions({ headers: headers });
    url = this.url + endpoint;
    return this.http.post(url, body, options);
  }

  authget(endpoint: string, options?: RequestOptions) {
    let token = localStorage.getItem("key");
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', 'Token ' + token);
    options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + endpoint, options);
  }

  authget1(endpoint: string, options?: RequestOptions) {
    let token = localStorage.getItem("key");
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authorization', 'Token ' + token);
    options = new RequestOptions({ headers: headers });
    return this.http.get(endpoint, options);
  }

  clearSession() {
    return this.http.get(this.sessionClearUrl);
  }

}
