import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CrossCourseComponent } from './Components/cross-course/cross-course.component';
import { MultiSelectComponent } from './Components/multi-select/multi-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CrossCourseComponent,
    MultiSelectComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
