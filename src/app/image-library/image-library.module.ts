import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLibraryComponent } from './image-library.component';
import { GalleryModule } from 'ng-gallery';



@NgModule({
  declarations: [ImageLibraryComponent],
  imports: [
    CommonModule,
    GalleryModule
  ],
  exports: [ImageLibraryComponent]
})
export class ImageLibraryModule { }
