import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexPaginaComponent } from './pokedex-pagina/pokedex-pagina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    PokedexPaginaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class PokedexModule { }
