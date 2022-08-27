import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(
    public router:Router,
    public storage:Storage
  ) {}

  
  ngOnInit() {
    setTimeout(() => {
      this.storage.get('login_details').then(res => {
        if (res)
          this.router.navigateByUrl('/dashboard');
        else
          this.router.navigateByUrl('/login');
      })
    },2500);
  }


}
