import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../../Services/chat.service";
import {Message} from "../../Classes/message";


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input() user;
  @Input() chatList;
  text: string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

  }

  sendMessage(message: string) {
        this.chatList.push(new Message(this.user,this.text));
        this.chatService.chatSubject.next(this.chatList);
        this.text = ""
  }
}
