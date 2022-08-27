import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
declare var $: any;
import { ModalController } from "@ionic/angular";
import { RatedoctorPage } from "./../components/ratedoctor/ratedoctor.page";
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  backToTop: boolean = false;
  @ViewChild(IonContent) content: IonContent;

  upcoming;
  loader_visibility: boolean = true;
  completed;
  all_appointment;
  canceled;
  user_parent_id;
  upcoming_length: boolean = false;
  cancel_length: boolean = false;
  completed_length: boolean = false;

  constructor(
    private platform: Platform,
    public storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public modal: ModalController,
    public router: Router
  ) { }

  ngOnInit() {
    console.log(111);
  }

  ionViewDidEnter() {
    this.storage.get('login_details').then(res => {
      this.user_parent_id = res.id;
      this.get_patient_schedule(this.user_parent_id);
      this.get_appointment('upcoming');
    })
  }

  get_patient_schedule(id) {
       this.http.get(`${this.url.serverUrl}get_patient_schedule?parent_id=${id}`)
      .subscribe(
        (res) => {
          console.table(res);
          this.all_appointment = res;
          this.upcoming = this.all_appointment.filter(function (e) {
            return e.status == 1 || e.status == 0;
          });
          this.upcoming.length > 0 ? this.upcoming_length = false : this.upcoming_length = true;

          this.canceled = this.all_appointment.filter(function (e) {
            return e.status == -1;
          });
          this.canceled.length > 0 ? this.cancel_length = false : this.cancel_length = true;

          this.completed = this.all_appointment.filter(function (e) {
            return e.status == 2;
          });
          this.completed.length > 0 ? this.completed_length = false : this.completed_length = true;
          $(".no_appointment").hide();

          this.loader_visibility = false;
        },
        (err) => console.log(err)
      );
  }

  get_appointment(type) {
    $('.col').removeClass('active');
    $('#' + type).addClass('active');
    $('.visibility').addClass('hide');
    $('#visibility_' + type).removeClass('hide');
    $(".no_appointment").removeClass('show');
    $("#no_appointment_" + type).addClass('show');
  }


  getScrollPos(pos: number) {
    if (pos > this.platform.height()) {
      this.backToTop = true;
    } else {
      this.backToTop = false;
    }
  }

  gotToTop() {
    this.content.scrollToTop(1800);
  }

  toggle_div(id) {
    $('.section').removeClass("collapsed");
    $('#collapsible' + id).addClass("collapsed");
    $('.downarrow').removeClass("collapsed");
    $('#downarrow' + id).addClass("collapsed");
  }

  cancel_appointment(id) {
    $("#card" + id).addClass("delete");
    this.loader_visibility = true;
    this.http.get(`${this.url.serverUrl}cancel_appointment?booking_id=${id}&cancel_by=user`)
      .subscribe(
        (res) => {
          this.get_patient_schedule(this.user_parent_id);
        },
        (err) => console.log(err)
      );
  }

  async rate_doctor(doctor_id,booking_id,index) {
    console.log(index);
    const modal = await this.modal.create({
      component: RatedoctorPage,
      cssClass: "Ratedoctor_modal"
    });
    await modal.present();
    await modal.onDidDismiss().then(async (data) => {
      if (data.data.formdata != null) {
        let formdata = {
          'rate_value': data.data.formdata.rate_value,
          'review': data.data.formdata.review,
          'doctor_id': doctor_id,
          'booking_id':booking_id,
          'patient_id': this.user_parent_id
        };
        this.loader_visibility = true;
        this.http
          .post(`${this.url.serverUrl}rate_doctor`, formdata)
          .subscribe(
            (res) => {
              console.table(this.completed);
              console.log(index);
              this.completed[index].rate_value=data.data.formdata.rate_value;
              console.log(this.completed[index].rate_value);
              this.loader_visibility = false;
            },
            (err) => console.log(err)
          );
      }
    });
  }


}
