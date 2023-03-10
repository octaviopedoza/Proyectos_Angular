import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexPaginaComponent } from './pokedex-pagina/pokedex-pagina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokedexPaginaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PokedexModule { }
