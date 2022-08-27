import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { UrlService } from "../../services/url/url.service";
import { HttpClient } from "@angular/common/http";
declare var $: any;


@Component({
  selector: 'app-selectuser',
  templateUrl: './selectuser.page.html',
  styleUrls: ['./selectuser.page.scss'],
})
export class SelectuserPage implements OnInit {
  patient_member_list;
  family_member_load = false;
  session_data;
  session_id;
  user_id=null;
  select_user:boolean=false;
  visit_type='Regular';
  constructor(
    public modal: ModalController,
    private storage: Storage,
    public url: UrlService,
    public http: HttpClient
  ) { }

  ngOnInit() { }
  dismiss() {
    this.modal.dismiss(
      {
        user_id: null,
      }
    );
  }

  confirm_appointment() {
    if(this.user_id)
    {
      this.modal.dismiss(
      {
        user_id: this.user_id,
        visit_type:this.visit_type,
      }
    );
    }
    else{
      this.select_user=true;
    }    
  }

  ionViewDidEnter() {
    this.storage.get('login_details').then(res => {
      this.session_data = res;
      this.session_id = res.id;
      this.get_patient_member();
    })
  }

  get_patient_member() {
    this.http.get(`${this.url.serverUrl}get_patient_member_with_parent?parent_id=${this.session_data.id}`)
      .subscribe(
        (res: any[]) => {
          this.family_member_load = true;
          this.patient_member_list = res;
        },
        (err) => console.log(err)
      );
  }

  select_member(id) {
    $(".calender_day").removeClass("active");
    $("#border" + id).addClass("active");
    $(".checkbbox").removeClass("show");
    $("#checkbox" + id).addClass("show");
    this.user_id = id;
  }

  radioGroupChange(event) {
    $(".calender_day").removeClass("active");
    $(".checkbbox").removeClass("show");
    this.visit_type = event.target.value;
    console.log(this.visit_type);
  }

}
