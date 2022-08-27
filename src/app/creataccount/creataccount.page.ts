import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { UrlService } from "../services/url/url.service";
import { HttpClient } from "@angular/common/http";
import { ToasterService } from "../services/toaster/toaster.service";

@Component({
  selector: 'app-creataccount',
  templateUrl: './creataccount.page.html',
  styleUrls: ['./creataccount.page.scss'],
})
export class CreataccountPage implements OnInit {
  password: boolean = false;
  f_name: boolean = false;
  l_name: boolean = false;
  mobile: boolean = false;
  mobile_length: boolean = false;
  mobile_no_exist: boolean = false;
  loader_visibility: boolean = false;
  constructor(
    public router: Router,
    public url: UrlService,
    public http: HttpClient,
    public toaster: ToasterService


  ) { }

  ngOnInit() {
  }


  confirm_mobile(formdata: NgForm) {
    formdata.value.password ? this.password = false : this.password = true;
    formdata.value.f_name ? this.f_name = false : this.f_name = true;
    formdata.value.l_name ? this.l_name = false : this.l_name = true;
    formdata.value.mobile ? this.mobile = false : this.mobile = true;
    formdata.value.mobile.toString().length == 10 ? this.mobile_length = false : this.mobile_length = true;
    formdata.value.otp=1234;
  
    if (formdata.value.password && formdata.value.f_name && !this.mobile_no_exist &&
      formdata.value.l_name && formdata.value.mobile.toString().length == 10) {
        this.loader_visibility=true;
      this.mobile_length = false;
      this.http
        .post(`${this.url.serverUrl}send_otp_for_mobile_verify`, formdata.value)
        .subscribe(
          (res) => {
            this.loader_visibility=false;
            formdata.value.otp=res;         
            let navExtra: NavigationExtras = {
              state: {
                regData: formdata.value,
              },
            };
            this.router.navigate(['verifymobile'], navExtra);
          },
          (err) => {
            this.toaster.toaster_show('Server error. Please try after some time', 'error', 'white');
          }
        );
    }
  }

  check_exist_mobile(event) {
    if (event.target.value.length == 10) {
      this.mobile_length = false;
      this.loader_visibility = true;
      this.http.get(`${this.url.serverUrl}check_existing_mobile_patient?mobile=${event.target.value}`)
        .subscribe(
          (res) => {
            this.loader_visibility = false;
            if (res == 1) {
              this.mobile_no_exist = true;
            }
            else {
              this.mobile_no_exist = false;
            }
          },
          (err) => console.log(err)
        );
    }


  }

}
