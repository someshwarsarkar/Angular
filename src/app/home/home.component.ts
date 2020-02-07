import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imagesUrl;
  public imagesUrl2;
  a:boolean=true;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [ 
    'https://homepages.cae.wisc.edu/~ece533/images/boat.png', 
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/girl.png',
    'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
    'https://homepages.cae.wisc.edu/~ece533/images/peppers.png',
    'https://homepages.cae.wisc.edu/~ece533/images/serrano.png',
    'https://homepages.cae.wisc.edu/~ece533/images/tulips.png',
    'https://homepages.cae.wisc.edu/~ece533/images/watch.png',
    'https://homepages.cae.wisc.edu/~ece533/images/cat.png'];
    this.imagesUrl2 = [
      'https://www.gstatic.com/webp/gallery3/2.png',
      'https://www.gstatic.com/webp/gallery3/3_webp_ll.png',
      'https://www.gstatic.com/webp/gallery3/1_webp_ll.webp',
      'https://www.gstatic.com/webp/gallery/1.jpg',
      'https://www.gstatic.com/webp/gallery/2.webp',
      'https://www.gstatic.com/webp/gallery/5.jpg',
      'https://homepages.cae.wisc.edu/~ece533/images/cat.png'
      
    ];
  }

}
