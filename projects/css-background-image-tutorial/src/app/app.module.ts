import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleBackgroundImagesComponent } from './Components/multiple-background-images/multiple-background-images.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleBackgroundImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
