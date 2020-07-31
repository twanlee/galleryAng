import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://gamek.mediacdn.vn/thumb_w/690/2019/7/8/1-15625474669018688730.jpg',
    'https://vcdn-ione.vnecdn.net/2019/07/03/0-1-4015-1562137097.jpg',
    'https://1.bp.blogspot.com/-DzJCoJPxoy8/XcfYutQGhiI/AAAAAAAATbw/RiABAdw127c_i13o0GGzjnh96rIj0sXrQCLcBGAsYHQ/s1600/Wap102Com-68-Anh-gai-xinh-mac-ao-dai%2B%25281%2529.jpg',
    'https://i.a4vn.com/2019/3/18/ngam-gai-xinh-goi-cam-tao-bao-chao-tuan-moi-4c9728.jpg'
  ];
  itemWidth: number;
  config = 4;

  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}
