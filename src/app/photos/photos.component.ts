import { Component, OnInit } from '@angular/core';
import { SeralbumsService } from '../seralbums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  col:any;
  constructor(private js:SeralbumsService, private rot:ActivatedRoute) { }

  ngOnInit() {
    this.rot.paramMap.subscribe(info=>
      this.js.getid(info.get('id')).subscribe(c=>{
        this.col=c;
      })
      )
  }

}
