import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weatherdata } from './models/weather.model';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weatherdata?:weatherdata 

  ngOnInit(): void {
    
   
  }

  constructor(private router:Router){
    this.router.navigate(['/register'])
  }
  title = 'travel';
}
