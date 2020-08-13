import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRates(){
    return this.http.get("http://data.fixer.io/api/latest?access_key=a66750b1c7b6e36f0c5e83be1c0a4c09");
  }
}
