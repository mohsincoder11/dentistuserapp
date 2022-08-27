import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  sliderOptions = {
    initialSlide: 1,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 2200,
    }, 
    speed: 1500,
  }
image_path="https://globaldentistry.in/images/team/";
  constructor() { }

  ngOnInit() {
  }

}
