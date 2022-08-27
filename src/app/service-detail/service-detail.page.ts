import { Component, OnInit } from '@angular/core';
import { UrlService } from "../services/url/url.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  image;
  title;
  description;
  constructor(
    public url: UrlService,
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('service_id');
    console.table(this.url.service_detail[id])
    this.image = this.url.service_detail[id]['image'];
    this.title = this.url.service_detail[id]['title'];
    this.description = this.url.service_detail[id]['description'];
  }

}
