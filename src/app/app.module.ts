import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { DeezerModule } from './deezer/deezer.module';

import {HttpClientModule} from '@angular/common/http';
import { ServicioService } from './server/servicio.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HttpClientModule,
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
