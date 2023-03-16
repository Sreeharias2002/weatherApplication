import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/assets/environments/envirnments';
import { weatherdata } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getweatherdata(cityname:string):Observable<weatherdata>{
    return this.http.get<weatherdata>(environments.weatherapibasedurl,{headers:new HttpHeaders().set(environments.XRapidAPIHostHeaderName,environments.XRapidAPIHostHeaderValue)
    .set(environments.XRapidAPIKeyHeaderName,environments.XRapidAPIKeyHeaderValue),
  params:new HttpParams()
.set("q",cityname)
.set("units","metric")
.set("mode","json")})
    
  }
}
