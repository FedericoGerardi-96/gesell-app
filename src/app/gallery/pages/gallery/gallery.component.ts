import { Component, EventEmitter, Output } from '@angular/core';
import {
  ModalGalleryConfig,
  ModalGalleryRef,
  ModalGalleryService,
  Image,
  ModalLibConfig,
  ButtonsStrategy,
} from '@ks89/angular-modal-gallery';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  images: Image[] = [
    new Image(0, {
      img: 'assets/Villa Gesell/IMG_6697.JPEG',
    }),
    new Image(1, {
      img: 'assets/Villa Gesell/IMG_6699.JPEG',
    }),
    new Image(2, {
      img: 'assets/Villa Gesell/IMG_6700.JPEG',
    }),
    new Image(3, {
      img: 'assets/Villa Gesell/IMG_6733.JPEG',
    }),
    new Image(4, {
      img: 'assets/Villa Gesell/IMG_6536.JPEG',
    }),
    new Image(5, {
      img: 'assets/Villa Gesell/IMG_6552.JPEG',
    }),
    new Image(6, {
      img: 'assets/Villa Gesell/IMG_6653.JPEG',
    }),
    new Image(7, {
      img: 'assets/Villa Gesell/IMG_6655.JPEG',
    }),
    new Image(8, {
      img: 'assets/Villa Gesell/IMG_6656.JPEG',
    }),
    new Image(9, {
      img: 'assets/Villa Gesell/IMG_6659.JPEG',
    }),
    new Image(10, {
      img: 'assets/Villa Gesell/IMG_6662.JPEG',
    }),
    new Image(11, {
      img: 'assets/Villa Gesell/IMG_6663.JPEG',
    }),
    new Image(12, {
      img: 'assets/Villa Gesell/IMG_6667.JPEG',
    }),
    new Image(13, {
      img: 'assets/Villa Gesell/IMG_6756.JPEG',
    }),
    new Image(14, {
      img: 'assets/Villa Gesell/IMG_6759.JPEG',
    }),
    new Image(15, {
      img: 'assets/Villa Gesell/IMG_6702.JPEG',
    }),
    new Image(16, {
      img: 'assets/Villa Gesell/IMG_6703.JPEG',
    }),
    new Image(17, {
      img: 'assets/Villa Gesell/IMG_6704.JPEG',
    }),
    new Image(18, {
      img: 'assets/Villa Gesell/IMG_6707.JPEG',
    }),
    new Image(19, {
      img: 'assets/Villa Gesell/IMG_6711.JPEG',
    }),
    new Image(20, {
      img: 'assets/Villa Gesell/IMG_6712.JPEG',
    }),
    new Image(21, {
      img: 'assets/Villa Gesell/IMG_6716.JPEG',
    }),
    new Image(22, {
      img: 'assets/Villa Gesell/IMG_6717.JPEG',
    }),
    new Image(23, {
      img: 'assets/Villa Gesell/IMG_6740.JPEG',
    }),
    new Image(24, {
      img: 'assets/Villa Gesell/IMG_6741.JPEG',
    }),
    new Image(25, {
      img: 'assets/Villa Gesell/IMG_6718.JPEG',
    }),
    new Image(26, {
      img: 'assets/Villa Gesell/IMG_6720.JPEG',
    }),
    new Image(27, {
      img: 'assets/Villa Gesell/IMG_6722.JPEG',
    }),
    new Image(28, {
      img: 'assets/Villa Gesell/IMG_6738.JPEG',
    }),
  ];

  constructor(
    private modalGalleryService: ModalGalleryService,
    private userSerevices: UserService
  ) {}

  ngOnInit(): void {
    // this.userSerevices.setLogUser();
  }

  onImageSelected(id: any): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id: id,
      images: this.images,
      currentImage: this.images[id],
      libConfig: {
        currentImageConfig: {
          downloadable: true,
        },
        buttonsConfig: {
          visible: true,
          strategy: ButtonsStrategy.SIMPLE,
        },
        previewConfig: {
          visible: true,
          number: 1,
        },
      } as ModalLibConfig,
    } as ModalGalleryConfig) as ModalGalleryRef;
  }
}
