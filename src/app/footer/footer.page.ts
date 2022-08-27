import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
  home:string;
  schedule:string;
  booking:string;
 

  constructor(public router:Router) { }

  ngOnInit() {

   // console.log(this.router.url);

   if(this.router.url=='/dashboard')
   {
this.home='active';
   }
  
   if(this.router.url=='/schedule')
   {
this.schedule='active';
   }
   
   if(this.router.url=='/doctorlist')
   {
this.booking='active';
   }
    
    
    
    
  }

}
