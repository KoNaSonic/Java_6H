import { Component, OnInit } from '@angular/core';
import {data} from '../assets/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Sasha';
  // girls = ["Sasha","Masha","Dasha","Natasha"];

/*  data = {
    USA: ["New York","Dallas","LA","SF"],
    France: ["Paris","Lion","Nant","Reims"],
    Germany: ["Berlin","Drezden","Hamburg","Bremen"],
    Israel: ["TA","Jerusalem","Netania","Haifa"]
  }
*/
  data: object;
  country: string;
  city: string;
  address: string;

  ngOnInit(): void {
    this.data = data;
    this.country = Object.keys(this.data)[0];
    this.city = this.data[this.country][0];
    this.address = this.createAddress(this.country, this.city);
  }

  getCountries(){
    return Object.keys(this.data);
  }

  getCountry(country){
    this.country = country;
    this.city = this.data[country][0];
    this.address = this.createAddress(this.country, this.city);
  }

  getCity(city){
    this.city = city;
    this.address = this.createAddress(this.country, this.city);
  }

  createAddress(country, city){
    return country + ', ' + city;
  }

}
