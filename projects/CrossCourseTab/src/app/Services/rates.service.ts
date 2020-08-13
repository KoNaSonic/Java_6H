import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  choiceSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  ratesSubject: BehaviorSubject<any> = new BehaviorSubject({});
  constructor() { }
}
