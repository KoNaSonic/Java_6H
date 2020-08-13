import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  state = {
    messages: []
  }
  messagesSubject: BehaviorSubject<Array<string>> = new BehaviorSubject([]);

  constructor() { }

  publish(msg){
    this.state.messages.push(msg);
    this.messagesSubject.next(this.state.messages);
  }
}
