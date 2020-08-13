import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../../Services/chat.service";

@Component({
  selector: 'app-chat-instance',
  templateUrl: './chat-instance.component.html',
  styleUrls: ['./chat-instance.component.css']
})
export class ChatInstanceComponent implements OnInit {
  @Input() name;

  message = "";
  messages = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.messagesSubject.subscribe(res => this.messages = res)
  }

  send(){
    this.chatService.publish(this.name + ": "+ this.message);
    this.message = "";
  }
}
