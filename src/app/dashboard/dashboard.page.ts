import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { Router } from '@angular/router';
declare var $: any;
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  doctor_list;
  hospital_list;
  patient_member_list;
  session_data;
  user_name;
  session_image;
  family_member_load = false;
  no_member = false;
  doctor_loaded = false;
  upcoming_visit;
  upcoming_visit_loaded: boolean = false;
  upcoming_visit_present: boolean = true;
  upcoming_booking_for = 'Yourself';
  sliderOptions = {
    initialSlide: 1,
    loop: false,
    slidesPerView: 2.6,
    autoplay: {
      disableOnInteraction: false,
      delay: 2000,
    },
    speed: 2000,
  }

  constructor(
    public menuCtrl: MenuController,
    public alertController: AlertController,
    private location: Location,
    private platform: Platform,
    private storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public router: Router,
  ) {
   

  }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    var status = navigator.onLine;
    if (!status) {
      // console.log('Internet not availabel !!');
      document.getElementById("internet_error").textContent = "Check internet connection.";
      var x = document.getElementById("internet_snackbar");
      x.className = "show_danger";
      setTimeout(function () {
        x.className = x.className.replace("show_danger", "");
      }, 10000);
    }
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter() {
    this.storage.get('login_details').then(res => {
      this.session_data = res;
      this.user_name = res.f_name;
      this.session_image = res.image;
      this.get_patient_member();
      this.get_upcoming_visit();
      this.get_doctor_for_user_app();

    })

    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.location.isCurrentPathEqualTo('/dashboard')) {

        // Show Exit Alert!
        navigator['app'].exitApp();

      } else {
        this.location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }


  get_patient_member() {
    this.http.get(`${this.url.serverUrl}get_patient_member?parent_id=${this.session_data.id}`)
      .subscribe(
        (res: any[]) => {
          this.patient_member_list = res;
          this.family_member_load = true;
          res.length > 0 ? this.no_member = false : this.no_member = true;
        },
        (err) => console.log(err)
      );
  }

  get_doctor_for_user_app() {
    this.http.get(`${this.url.serverUrl}get_doctor_for_user_app`)
      .subscribe(
        (res) => {
          this.doctor_list = res['doctor_list'];

          this.doctor_list.length == 1 ? this.sliderOptions.slidesPerView = 1 : '';
          this.doctor_list.length == 2 ? this.sliderOptions.slidesPerView = 1.8 : '';
          this.hospital_list = res['hospital_list'];
          this.doctor_loaded = true;
        },
        (err) => console.log(err)
      );
  }

  get_upcoming_visit() {
    let current_time = moment().format('H:mm');
    let current_date = moment().format('YYYY-MM-DD');

    this.http.get(`${this.url.serverUrl}get_upcoming_visit?parent_id=${this.session_data.id}&current_time=${current_time}&current_date=${current_date}`)
      .subscribe(
        (res: any) => {
          //  console.table(res);
          this.session_data.id == res.patient_id ? this.upcoming_booking_for = 'Yourself' : this.upcoming_booking_for = res.f_name + ' ' + res.l_name;
          this.upcoming_visit_loaded = true;
          this.upcoming_visit = res;
          this.upcoming_visit.id ? this.upcoming_visit_present = true : this.upcoming_visit_present = false;
        },
        (err) => console.log(err)
      );
  }

  goto_doctor_details(id) {
    // console.log(id);
  }




 
}
