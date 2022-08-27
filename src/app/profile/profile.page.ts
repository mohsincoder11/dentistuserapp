import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import {
  ActionSheetController,
  ModalController,
  Platform,
} from "@ionic/angular";
declare var $: any;
import { ToasterService } from "../services/toaster/toaster.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loader_visibility: boolean = true;
  gendervalue;
  gender: boolean = false;
  dob: boolean = false;
  f_name: boolean = false;
  l_name: boolean = false;
  email: boolean = false;
  imgURl = this.url.patient_image + '/noimage.png';
  session_data = {
    id: "",
    f_name: "",
    l_name: "",
    gender: "",
    dob: "",
    email: "",
    image: ""
  };
  lastImage;
  imgName;
  profile_image;
  constructor(
    public cd: ChangeDetectorRef,
    public storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public actionSheetController: ActionSheetController,
    public platform: Platform,
    public toaster: ToasterService

  ) {

  }

  ionViewWillEnter() {
    this.storage.get('login_details').then(res => {
      console.log(res);
      this.session_data.f_name = res.f_name;
      this.session_data.l_name = res.l_name;
      this.session_data.gender = res.gender;
      this.session_data.email = res.email;
      this.session_data.dob = res.dob;
      this.session_data.id = res.id;
      this.session_data.image = res.image;
      this.imgURl = this.url.patient_image + '/' + res.image;
      this.loader_visibility = false;
      this.profile_image = res.image;
    })
  }

  radioGroupChange(event) {
    this.gendervalue = event.detail.value;
  }

  ngOnInit() {
  }


  update_profile(formdata: NgForm) {

    this.gendervalue ? this.gender = false : this.gender = true;
    formdata.value.dob ? this.dob = false : this.dob = true;
    formdata.value.f_name ? this.f_name = false : this.f_name = true;
    formdata.value.l_name ? this.l_name = false : this.l_name = true;
    formdata.value.email ? this.email = false : this.email = true;
    if (formdata.value.dob && formdata.value.f_name && formdata.value.l_name && formdata.value.email) {
      this.loader_visibility = true;
      var f_data = new FormData();
      f_data.append('dob', formdata.value.dob.split('T')[0]);
      f_data.append('id', this.session_data.id);
      f_data.append('gender', this.gendervalue);
      f_data.append('f_name', formdata.value.f_name);
      f_data.append('l_name', formdata.value.l_name);
      f_data.append('email', formdata.value.email);
      f_data.set('image', this.profile_image);
      this.http
        .post(`${this.url.serverUrl}update_patient`, f_data)
        .subscribe(
          (res) => {
            if (res) {
            //  console.log(res);
              this.storage.set('login_details', res).then(res => {
                this.imgURl = this.url.patient_image + '/' + res.image;
                this.loader_visibility = false;
              })
              this.toaster.toaster_show('Profile updated successfully.', 'success', 'white');

              // this.router.navigate(['/login']);
              this.cd.detectChanges();

            }
            else {
            }
          },
          (err) => console.log(err)
        );
    }
  }

  async selectImage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgURl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);  // to trigger onload
    }

    this.profile_image = <File>event.target.files[0];
    console.log(this.profile_image);
  }

}
