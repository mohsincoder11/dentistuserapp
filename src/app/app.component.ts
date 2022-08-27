import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UrlService } from "./services/url/url.service";
import { ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  session_data = {
    f_name: "",
    l_name: "",
    email: "",
    image: ""
  };
  VersionNumber;
  constructor(
    private platform: Platform,
    public router: Router,
    public storage: Storage,
    public url: UrlService,
    public modalCtrl: ModalController,
    private socialSharing: SocialSharing,
    private appVersion: AppVersion,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.storage.create();
    this.platform.ready().then(() => {
      this.router.navigateByUrl('/');
    });
  }


  ngOnInit()
  {}

  socialshare() {
    var options = {
      message: 'share this', // not supported on some apps (Facebook, Instagram)
      url: 'https://play.google.com/store/apps/details?id=io.globaldentistry.starter',
    };
    this.socialSharing.shareWithOptions(options);
  }

  get_session_data() {
    this.storage.get('login_details').then(res => {
      this.session_data = {
        f_name: res.f_name,
        l_name: res.l_name,
        email: res.email,
        image: res.image

      };
      this.appVersion.getVersionCode().then(value => {
        this.VersionNumber = value;
        console.log('version_number is:' + this.VersionNumber);
      }).catch(err => {
        // alert(err);
      });
    })
  }

  log_out() {
    this.storage.remove('login_details').then(re => {
      this.router.navigateByUrl('/login');
    })
  }

  open_playstore() {
    console.log(11);
    window.open("https://play.google.com/store/apps/details?id=io.globaldentistry.starter", "_system");
  }
}
