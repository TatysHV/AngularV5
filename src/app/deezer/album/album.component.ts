import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Album } from './album';
import { map } from 'rxjs/operators';
import { ServicioService } from 'src/app/server/servicio.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums : Array<Album>;

  constructor(private http : HttpClient, private serve : ServicioService) { 
    this.albums = new Array<Album>();
  }

  ngOnInit() {
    this.getAlbumList();
  }

  getAlbumList(){
    this.serve.getAlbums().subscribe(album =>{
      this.albums = album.data.data;
    });
  }




}
