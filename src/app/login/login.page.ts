import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Platform, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { ToasterService } from "../services/toaster/toaster.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mobile: boolean = false;
  public password: boolean = false;
  public loader_visibility = false;
  mobile_length: boolean = false;
  session_data;
  formdata = {
    mobile: "",
    password: "",
  };

  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    private _location: Location,
    private platform: Platform,
    private storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public toaster: ToasterService
  ) {
  }

  ngOnInit() {
  }

  log_in(formdata: NgForm) {
    formdata.value.password ? this.password = false : this.password = true;
    formdata.value.mobile.toString().length == 10 ? this.mobile_length = false : this.mobile_length = true;

    if (formdata.value.mobile && formdata.value.password && formdata.value.mobile.toString().length == 10) {
      this.loader_visibility = true;

      this.http
        .post(`${this.url.serverUrl}check_login_patient`, formdata.value)
        .subscribe(
          (res) => {
            this.loader_visibility = false;
            if (res == 0) {
              this.toaster.toaster_show('Invalid username or password.', 'error', 'white');
            }
            else {
              formdata.resetForm();
              this.session_data = res;
              this.storage.set('login_details', this.session_data).then(res => {
                this.router.navigate(['/dashboard']);
              })
            }
          },
          (err) => {
            this.toaster.toaster_show('Server error. Please try after some time', 'error', 'white');

          }
        );
    }
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/login')) {
        // Show Exit Alert!
        console.log('Show Exit Alert!');
        navigator['app'].exitApp();

      } else {
        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();
      }
    });


    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });
  }
  
}
