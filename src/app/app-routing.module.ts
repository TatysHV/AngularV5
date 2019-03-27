import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './deezer/album/album.component';
import { DeezerModule } from './deezer/deezer.module';

const routes: Routes = [

{path: '',
  loadChildren: './deezer/deezer.module#DeezerModule'
},
{path: 'album',
  loadChildren: './deezer/deezer.module#DeezerModule'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
