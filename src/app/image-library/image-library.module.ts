import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLibraryComponent } from './image-library.component';



@NgModule({
  declarations: [ImageLibraryComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageLibraryComponent]
})
export class ImageLibraryModule { }
