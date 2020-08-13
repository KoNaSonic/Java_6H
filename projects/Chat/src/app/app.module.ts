import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ChatInstanceComponent } from './Components/chat-instance/chat-instance.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInstanceComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
