import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  options = {
    responseType: 'text' as const,
  };
  /*options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin, X-Requested-With, Content-type, token, Accept, Authorization'
    })
  }*/

  constructor(private httpClient: HttpClient) { }

  getAuth(log: string, psw: string){
    return this.httpClient.post('http://localhost:8081/auth', JSON.stringify({log, psw}), this.options);
  }
}
