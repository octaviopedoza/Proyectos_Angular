import { ContadorModule } from './modules/contador/contador.module';
import { ClimaModule } from './modules/clima/clima.module';
import { PokedexModule } from './modules/pokedex/pokedex.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexModule,
    ClimaModule,
    ContadorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
