import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { ToasterService } from "../services/toaster/toaster.service";

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.page.html',
  styleUrls: ['./edit-member.page.scss'],
})
export class EditMemberPage implements OnInit {
  loader_visibility: boolean = false;
  gendervalue;
  gender: boolean = false;
  dob: boolean = false;
  f_name: boolean = false;
  l_name: boolean = false;
  patient_data = {
    id: "",
    f_name: "",
    l_name: "",
    gender: "",
    dob: "",
    image: ""
  };
  imgURl = this.url.patient_image + '/noimage.png';

  profile_image;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public url: UrlService,
    public toaster: ToasterService

  ) {
    activatedRoute.queryParams.subscribe(async (params) => {
      if (router.getCurrentNavigation().extras.state.patient_data) {
        let data = await router.getCurrentNavigation().extras.state.patient_data;
     //   console.log(data);
        this.patient_data.f_name = data[0].f_name;
        this.patient_data.l_name = data[0].l_name;
        this.patient_data.gender = data[0].gender;
        this.gendervalue=data[0].gender;
        this.patient_data.dob = data[0].dob;
        this.patient_data.id = data[0].id;
        this.profile_image = data[0].image;
        this.imgURl = this.url.patient_image + '/' + this.profile_image;


      }
    });
  }
  radioGroupChange(event) {
    this.gendervalue = event.detail.value;
  }
  ngOnInit() {

  }

  update_profile(formdata: NgForm) {
    this.gendervalue ? this.gender = false : this.gender = true;
    formdata.value.f_name ? this.f_name = false : this.f_name = true;
    formdata.value.l_name ? this.l_name = false : this.l_name = true;
    if (formdata.value.f_name && formdata.value.l_name) {
      this.loader_visibility = true;
      var f_data = new FormData();
      f_data.append('dob', formdata.value.dob.split('T')[0]);
      f_data.append('id',this.patient_data.id);
      f_data.append('gender', this.gendervalue);
      f_data.append('f_name', formdata.value.f_name);
      f_data.append('l_name', formdata.value.l_name);
      f_data.append('email', formdata.value.email);
      f_data.set('image', this.profile_image);
      console.log(this.gendervalue);
       this.http
        .post(`${this.url.serverUrl}update_family_member`, f_data)
        .subscribe(
          (res) => {
            if (res) {
              this.loader_visibility = false;
              this.toaster.toaster_show('Member details updated successfully.', 'success', 'white');
              formdata.resetForm();
              this.router.navigate(['/listmember']);
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
  }
}
