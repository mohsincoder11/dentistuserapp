import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { NgForm } from '@angular/forms';
import { ToasterService } from "../services/toaster/toaster.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  mobile_number;
  mobile_length;
  constructor(
    public router: Router,
    public http: HttpClient,
    public url: UrlService,
    public toaster: ToasterService

  ) {

  }

  ngOnInit() {
  }

  send_otp(formdata: NgForm) {
    formdata.value.mobile.toString().length == 10 ? this.mobile_length = false : this.mobile_length = true;
    if (formdata.value.mobile.toString().length == 10) {
      this.http
        .post(`${this.url.serverUrl}send_forgot_otp`, formdata.value)
        .subscribe(
          (res) => {
            if (res == 0) {
              this.toaster.toaster_show('This mobile number is not registered with us.', 'error', 'white');
            }
            else {
              this.router.navigate(['/otpconfirm/' + formdata.value.mobile+'/'+res]);
            }
          },
          (err) => console.log(err)
        );
    }

  }


}
