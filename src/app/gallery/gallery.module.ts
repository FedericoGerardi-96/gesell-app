import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MinimasonryComponent } from './components/minimasonry/minimasonry.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    MinimasonryComponent,
    GalleryComponent,
    MinimasonryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
    NgxMasonryModule
  ]
})
export class GalleryModule { }
