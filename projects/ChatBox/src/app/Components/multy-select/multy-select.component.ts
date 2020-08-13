import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-multy-select',
  templateUrl: './multy-select.component.html',
  styleUrls: ['./multy-select.component.css']
})
export class MultySelectComponent implements OnInit {

  @ViewChild('sel') sel;
  users =[]
  chosenUsers=[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.usersSubject
      .subscribe((res:any) =>this.users = res)
  }

  getChoice() {
    this.chosenUsers = Array.prototype.filter.call(this.sel.nativeElement.options, opt=>opt.selected)
      .map(opt => opt.value);

    this.userService.choiceSubject.next(this.chosenUsers)
  }
}
