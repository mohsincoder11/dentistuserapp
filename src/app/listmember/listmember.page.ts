import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
declare var $: any;
import { Router, NavigationExtras } from '@angular/router';
import { ToasterService } from "../services/toaster/toaster.service";


@Component({
  selector: 'app-listmember',
  templateUrl: './listmember.page.html',
  styleUrls: ['./listmember.page.scss'],
})

export class ListmemberPage implements OnInit {
  patient_member_list;
  patient_member_list_length:boolean=false;
  session_data;
  loader_visibility:boolean = true;
  
  constructor(
    public storage:Storage,
    public http:HttpClient,
    public url: UrlService,
    public router:Router,
    public toaster: ToasterService
  ) {    
   }

  ngOnInit() {
    this.loader_visibility=true;   
  }

  ionViewDidEnter()
  {    
    this.get_all_patient();    
  }

  get_all_patient()
  {
    this.storage.get('login_details').then(res => {
      this.http.get(`${this.url.serverUrl}get_patient_member?parent_id=${res.id}`)
      .subscribe(
        (res:any[]) => {
          res.length>0 ? this.patient_member_list_length = false : this.patient_member_list_length = true;
          this.loader_visibility=false;  
          this.patient_member_list = res;
          console.table(this.patient_member_list);
        },
        (err) => console.log(err)
      );  
       })
  }

  delete_patient(id)
  {   
    $("#card"+id).addClass("delete");
     this.loader_visibility=true;
    this.http.get(`${this.url.serverUrl}delete_patient_member?id=${id}`)
    .subscribe(
      (res) => {               
        this.toaster.toaster_show('Member deleted successfully.', 'success', 'white');
        this.get_all_patient();
      },
      (err) => console.log(err)
    );
  }

  edit_member(id)
  {
    let single_patient = this.patient_member_list.filter(function (e) {
      return e.id == id;
    });
    let navExtra: NavigationExtras = {
      state: {
        patient_data: single_patient,
      },
    };

    this.router.navigate(['edit-member/'+id], navExtra);

  }

}
