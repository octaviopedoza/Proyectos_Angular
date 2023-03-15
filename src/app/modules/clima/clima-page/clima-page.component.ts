import { ClimaService } from './../services/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-page',
  templateUrl: './clima-page.component.html',
  styleUrls: ['./clima-page.component.css']
})
export class ClimaPageComponent implements OnInit{
  cargando:boolean = false;
  ipVisitante:string = '';
  longitud:string = '';
  latitud:string = '';
  state:string='';
  city:string='';
  date:string='';
  anio:string='';
  mes:string='';
  dia:string='';


  datos:Array<any>=[];

  constructor(private climaService:ClimaService){ }

  ngOnInit(): void {
    this.cargando = true;
    this.getlocation();
    this.getclima();
    this.cargando = false;
  }

  getlocation(): void{
    this.climaService.getLocation().subscribe((data:any) =>{
      this.latitud = data.latitude;
      this.longitud = data.longitude;
      this.state = data.region_name;
      this.city = data.city;
    })
  }

  getclima(): void{
    this.climaService.getClima(this.longitud,this.latitud).subscribe((data:any) =>{
      this.datos = data.dataseries;
      this.date = this.datos[0].date.toString();
      this.anio = this.date.slice(0,4)
      this.mes = this.date.slice(4,6)
      this.dia = this.date.slice(6,8)
    })
      
  }

}
