import { Component, OnInit } from '@angular/core';
import { Albums } from '../albums';
import { SeralbumsService } from '../seralbums.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumsobj: any;
  constructor(private js:SeralbumsService) { }
  
  ngOnInit() {
    this.js.getUsers().subscribe(
      albumtitle=>{
        this.albumsobj=albumtitle;
      }
    )
  }
}
