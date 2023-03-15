import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../env/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  // private readonly key = environment.apiKeyIp
  private readonly URL = environment.apiLocation;

  constructor(private http:HttpClient) { }

  getLocation():Observable<any>{
    return this.http.get(`${this.URL}`)
  }

  getClima(lon:string, lat:string):Observable<any>{
    return this.http.get(`http://www.7timer.info/bin/civillight.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json`)
  }

}