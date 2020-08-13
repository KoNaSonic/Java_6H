import {Component, OnInit} from '@angular/core';
import {UserService} from "./Services/user.service";
import {ChatService} from "./Services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users = ["Sam", "Alexa", "Ann", "Van", "Lee"];
  chosenUsers = [];
  chat = [];

  constructor(private userService: UserService,
              private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.userService.choiceSubject.subscribe((res:any) => this.chosenUsers = res)
    this.userService.usersSubject.next(this.users)

    this.chatService.chatSubject.subscribe((res:any) => this.chat = res)

  }

}
