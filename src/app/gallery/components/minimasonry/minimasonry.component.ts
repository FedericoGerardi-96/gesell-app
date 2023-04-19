import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-minimasonry',
  templateUrl: './minimasonry.component.html',
  styleUrls: ['./minimasonry.component.css'],
})
export class MinimasonryComponent {
  @Output() public onImageSelected = new EventEmitter<number>();

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  masonryImages: any = [];
  limit = 30;

  image = '';

  dummyPictures = [
    // Bathroom
    { url: 'assets/Villa Gesell/IMG_6697.JPEG', id: 0 },
    { url: 'assets/Villa Gesell/IMG_6699.JPEG', id: 1 },
    { url: 'assets/Villa Gesell/IMG_6700.JPEG', id: 2 },
    { url: 'assets/Villa Gesell/IMG_6733.JPEG', id: 3 },
    // Parking
    { url: 'assets/Villa Gesell/IMG_6536.JPEG', id: 4 },
    { url: 'assets/Villa Gesell/IMG_6552.JPEG', id: 5 },
    { url: 'assets/Villa Gesell/IMG_6653.JPEG', id: 6 },
    { url: 'assets/Villa Gesell/IMG_6655.JPEG', id: 7 },
    { url: 'assets/Villa Gesell/IMG_6656.JPEG', id: 8 },
    { url: 'assets/Villa Gesell/IMG_6659.JPEG', id: 9 },
    { url: 'assets/Villa Gesell/IMG_6662.JPEG', id: 10 },
    { url: 'assets/Villa Gesell/IMG_6663.JPEG', id: 11 },
    { url: 'assets/Villa Gesell/IMG_6667.JPEG', id: 12 },
    { url: 'assets/Villa Gesell/IMG_6756.JPEG', id: 13 },
    { url: 'assets/Villa Gesell/IMG_6759.JPEG', id: 14 },
    // Room
    { url: 'assets/Villa Gesell/IMG_6702.JPEG', id: 15 },
    { url: 'assets/Villa Gesell/IMG_6703.JPEG', id: 16 },
    { url: 'assets/Villa Gesell/IMG_6704.JPEG', id: 17 },
    { url: 'assets/Villa Gesell/IMG_6707.JPEG', id: 18 },
    { url: 'assets/Villa Gesell/IMG_6711.JPEG', id: 19 },
    { url: 'assets/Villa Gesell/IMG_6712.JPEG', id: 20 },
    { url: 'assets/Villa Gesell/IMG_6716.JPEG', id: 21 },
    // Living room
    { url: 'assets/Villa Gesell/IMG_6717.JPEG', id: 22 },
    { url: 'assets/Villa Gesell/IMG_6740.JPEG', id: 23 },
    { url: 'assets/Villa Gesell/IMG_6741.JPEG', id: 24 },
    // kitchen
    { url: 'assets/Villa Gesell/IMG_6718.JPEG', id: 25 },
    { url: 'assets/Villa Gesell/IMG_6720.JPEG', id: 26 },
    { url: 'assets/Villa Gesell/IMG_6722.JPEG', id: 27 },
    { url: 'assets/Villa Gesell/IMG_6738.JPEG', id: 28 },
  ];

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  onSelectImage(idx: number) {
    this.onImageSelected.emit(idx);
  }
}
