import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from './../../../../env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private readonly URL = environment.apiPokemon;

  constructor(private http:HttpClient) { }

  getPokemon(name: string): Observable<any>{ //funcion observable que solicita el nombre ingresado por el usuario como parametro para consultar el api
    return this.http.get(`${this.URL}/${name}`)
  }

}
