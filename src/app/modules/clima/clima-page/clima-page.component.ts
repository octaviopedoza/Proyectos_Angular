import { ClimaService } from './../services/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-page',
  templateUrl: './clima-page.component.html',
  styleUrls: ['./clima-page.component.css']
})
export class ClimaPageComponent implements OnInit{
  ipVisitante:string = '';
  longitud:string = '';
  latitud:string = '';
  datos:Array<any>=[];

  constructor(private climaService:ClimaService){ }

  ngOnInit(): void {
    this.getlocation();
    this.getclima();
  }

  getlocation(): void{
    this.climaService.getLocation().subscribe((data:any) =>{
      this.latitud = data.latitude;
      this.longitud = data.longitude;
      console.log('latitud: ',this.latitud)
      console.log('longitud: ',this.longitud)
    })
  }

  getclima(): void{
    this.climaService.getClima(this.longitud,this.latitud).subscribe((data:any) =>{
      this.datos = data.dataseries;
      console.log('datos del clima: ',data)
      console.log('datos del clima: ',this.datos)
    })
  }

}
