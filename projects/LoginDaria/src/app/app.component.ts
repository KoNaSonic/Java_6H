import {Component, ElementRef, ViewChild} from '@angular/core';
import {User} from "./Classes/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';
  login = true;
  back = false;
  @ViewChild("pswInput") pswInput: ElementRef;
  @ViewChild("pswTarget") pswTarget: ElementRef;
  @ViewChild("lgnInput") lgnInput: ElementRef;
  @ViewChild("loginMessage") loginMessage: ElementRef;



  toggleView() {
    let input = this.pswInput.nativeElement;
    let target = this.pswTarget.nativeElement;
    if (input.type == 'password') {
      target.classList.add('visible');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('visible');
      input.setAttribute('type', 'password');
    }
  }
  returnBack(){
    this.back = false;
    this.login = true;
    this.loginMessage.nativeElement.textContent = "Login to your account";
  }

  submit() {
    this.back=true;
    let newUser = new User(
      this.lgnInput.nativeElement.value,
      this.pswInput.nativeElement.value,
    )
    let message = this.loginMessage.nativeElement;

    fetch("http://localhost:8081/auth",{
      method: "POST",
      body: JSON.stringify(newUser)
    })
      .then(response => response.text())
      .then(txt => {
        if(txt==="Authentication successful!") message.textContent = "welcome to your account, " + newUser.log
        else message.textContent = "access denied!"
        this.login=false;
      });
  }

}
