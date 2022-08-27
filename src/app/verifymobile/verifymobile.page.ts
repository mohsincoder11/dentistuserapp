import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
declare var $: any;
import { ToasterService } from "../services/toaster/toaster.service";

@Component({
  selector: 'app-verifymobile',
  templateUrl: './verifymobile.page.html',
  styleUrls: ['./verifymobile.page.scss'],
})
export class VerifymobilePage implements OnInit {
  regUserData;
  mobile_no;
  otp;
  otp_error: boolean = false;
  loader_visibility: boolean = false;
  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public url: UrlService,
    public toaster: ToasterService

  ) {
    activatedRoute.queryParams.subscribe(async (params) => {
      if (router.getCurrentNavigation().extras.state.regData) {
        this.regUserData = await router.getCurrentNavigation().extras.state
          .regData;
        this.mobile_no = this.regUserData.mobile;
        this.otp = this.regUserData.otp;       
      }
    });
  }
  ionViewWillEnter(): void {
    {
    }
  }

  ngOnInit() {
  }

  focusnext(event) {
    this.otp_error = false;
    if (event.target.value.length > 0) {
      $('#' + event.target.id).addClass('focus_class');
      if (event.target.id == 4) {
        this.verify_otp();
      }
      else {
        let movenext = +parseInt(event.target.id) + 1;
        document.getElementById('' + movenext).focus();
      }
    }
    else {
      $('#' + event.target.id).removeClass('focus_class');
    }
  }

  verify_otp() {
    if ($("#1").val() && $("#2").val() && $("#3").val() && $("#4").val()) {
      let input_otp = $("#1").val() + $("#2").val() + $("#3").val() + $("#4").val();
      if (this.otp == input_otp) {
        this.loader_visibility = true;
        this.http
          .post(`${this.url.serverUrl}register_patient`, this.regUserData)
          .subscribe(
            (res) => {
              this.loader_visibility = false;

              console.log(res);
              if (res > 0) {
                this.toaster.toaster_show('Account created successfully.', 'success', 'white');

                this.router.navigate(['/login']);
              }
              else {
                this.toaster.toaster_show('Server error. Please try again', 'error', 'white');

              }
            },
            (err) => console.log(err)
          );
      }
      else {
        this.otp_error = true;
      }
    }
    else {
      this.otp_error = true;
    }
  }


}
