import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  checkCarousel1: boolean = true;
  checkCarousel2: boolean = false;
  checkCarousel3: boolean = false;
}
