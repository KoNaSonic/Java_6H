import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './Components/child/child.component';
import {FormsModule} from '@angular/forms';
import { SelectComponent } from './Components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
