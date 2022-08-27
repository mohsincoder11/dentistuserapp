import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { Platform, IonContent } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-from-hospital',
  templateUrl: './doctor-from-hospital.page.html',
  styleUrls: ['./doctor-from-hospital.page.scss'],
})
export class DoctorFromHospitalPage implements OnInit {

  doctor_list;
  backToTop: boolean = false;
  @ViewChild(IonContent) content: IonContent;
  loader_visibility: boolean = true;
  no_doctor = false;
  hospital_name;
  constructor(
    private storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public platform: Platform,
    public router: Router,
    private route: ActivatedRoute,


  ) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    let id = this.route.snapshot.paramMap.get('id');
    this.hospital_name = this.route.snapshot.paramMap.get('hospital_name');
    console.log(this.hospital_name);
    this.get_doctor_for_user_app(id);
  }

  get_doctor_for_user_app(id) {
    this.http.get(`${this.url.serverUrl}get_doctor_from_hospital?id=${id}`)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.doctor_list = res;
          this.doctor_list.length < 1 ? this.no_doctor = true : this.no_doctor = false;
          //  console.table(this.doctor_list);
        },
        (err) => console.log(err)
      );
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

  goto_doctor_details(id) {
    this.router.navigate(['/doctordetails/' + id]);
  }







}