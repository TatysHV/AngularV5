import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { DeezerRoutingModule } from './deezer-routing.module';
import { ServicioService } from '../server/servicio.service';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule, DeezerRoutingModule
  ],
  providers:[ServicioService]
})

export class DeezerModule { }
