import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleBackgroundImagesComponent } from './multiple-images/multiple-background-images.component';
import { SingleBackgroundImageComponent } from './single-image/single-background-image.component';
import { TriangularBackgroundImagesComponent } from './triangular-images/triangular-background-images.component';
import { GradientOverlayImageComponent } from './gradient-overlay-image/gradient-overlay-image.component';
import { ColorChangingImageComponent } from './color-changing-image/color-changing-image.component';
import { GridImageComponent } from './grid-image/grid-image.component';
import { TextColorImageComponent } from './text-color-image/text-color-image.component';

@NgModule({
  declarations: [
    AppComponent,
    MultipleBackgroundImagesComponent,
    SingleBackgroundImageComponent,
    TriangularBackgroundImagesComponent,
    GradientOverlayImageComponent,
    ColorChangingImageComponent,
    GridImageComponent,
    TextColorImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
