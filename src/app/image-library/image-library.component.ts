import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'ng-gallery';
import { BUTERBRODS } from 'src/data/buterbrods';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.scss']
})
export class ImageLibraryComponent implements OnInit {

  public images!: Array<ImageItem>;

  public ngOnInit(): void {
    this.images = BUTERBRODS.map(
      buterbrod => new ImageItem({
        src: buterbrod.src,
        thumb: buterbrod.thumb
      })
    )
  }
}
