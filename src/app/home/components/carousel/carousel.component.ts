import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  images = [
    {
      url: 'assets/Villa Gesell/IMG_6536.JPEG',
      alt: 'cabañas chimay',
      id: '1',
      title: '',
    },
    {
      url: 'assets/Villa Gesell/IMG_6656.JPEG',
      alt: 'cabañas chimay',
      id: '2',
      title: '',
    },
    {
      url: 'assets/Villa Gesell/IMG_6655.JPEG',
      alt: 'cabañas chimay',
      id: '3',
      title: '',
    },
    {
      url: 'assets/Villa Gesell/IMG_6738.JPEG',
      alt: 'cabañas chimay',
      id: '4',
      title: '',
    },
    {
      url: 'assets/Villa Gesell/IMG_6718.JPEG',
      alt: 'cabañas chimay',
      id: '5',
      title: '',
    },
  ];

  customOptions: OwlOptions = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    mouseDrag: true,
    pullDrag: true,
    animateOut: 'fadeOut',
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['<', '>'],
    touchDrag: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
}
