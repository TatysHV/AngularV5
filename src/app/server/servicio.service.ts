import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumModel } from '../deezer/album/album-list.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private _http : HttpClient) { }

  getAlbums(){
    return this._http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=muse').pipe(
      map((res: AlbumModel) =>{ return { data: res}})
    ) 
  }
}

