import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersSubject: BehaviorSubject<any> = new BehaviorSubject<any>([])
  choiceSubject: BehaviorSubject<any> = new BehaviorSubject<any>([])

  constructor() { }
}
