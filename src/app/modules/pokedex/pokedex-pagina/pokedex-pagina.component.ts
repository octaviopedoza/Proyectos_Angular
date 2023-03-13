import { PokedexService } from './../services/pokedex.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pokedex-pagina',
  templateUrl: './pokedex-pagina.component.html',
  styleUrls: ['./pokedex-pagina.component.css']
})
export class PokedexPaginaComponent implements OnInit{
  existenDatos:boolean = false;
  src: string = '';
  urlImage: string = '';
  name: string = '';
  id?:number;
  weight?:number;
  height?:number;

  value = 'Limpiar';

  constructor(private pokedexService:PokedexService) {}

  ngOnInit(): void {
  }

  search(): void{
    this.pokedexService.getPokemon(this.src).subscribe((data: any) => {
      this.urlImage = data.sprites.front_default;
      this.name = data.name;
      this.id = data.id;
      this.weight = data.weight;
      this.height = data.height;
      this.existenDatos = true;
      console.log(this.id)
    })
  }

}
