import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../../Services/connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log = "";
  psw = "";
  result = "";
  isLogin =true;
  isLose = false;
  isWin = false;
  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
  }

  sendRequest(){
    this.connectService.getAuth(this.log, this.psw)
      .subscribe((res:any)=> {
        this.result = res;
        this.result == "OK" ? this.isWin=true : this.isLose=true;
      });
  }
  resetData(){
    this.log = "";
    this.psw = "";
  }
  returnBack(){
    this.isLose = false;
    this.isWin = false;

  }
}
