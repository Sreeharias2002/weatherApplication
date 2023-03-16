import { Component, OnInit } from '@angular/core';
import { weatherdata } from '../models/weather.model';
import { ApiService } from '../service/api.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit{
  cityname:string= "Chennai";
  weatherdata?:weatherdata ;
  
  constructor(private auth:AuthService,private weatherservice:ApiService){}

  ngOnInit():void{
    this.getweatherdata(this.cityname);
    this.auth.canaccess()
 
  
}
onsubmit(){
  this.getweatherdata(this.cityname);
  this.cityname=""

}
private getweatherdata(cityname:string){
   
  this.weatherservice.getweatherdata(cityname).subscribe({
    next:(respones)=>{
      this.weatherdata=respones;
      console.log(respones)
    }
  });
}

}
