import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MultipleBackgroundImagesComponent} from './multiple-images/multiple-background-images.component';
import {AppComponent} from './app.component';
import {SingleBackgroundImageComponent} from './single-image/single-background-image.component';
import {TriangularBackgroundImagesComponent} from './triangular-images/triangular-background-images.component';
import {GradientOverlayImageComponent} from './gradient-overlay-image/gradient-overlay-image.component';
import {ColorChangingImageComponent} from './color-changing-image/color-changing-image.component';
import {TextColorImageComponent} from './text-color-image/text-color-image.component';
import {GridImageComponent} from './grid-image/grid-image.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'single', component: SingleBackgroundImageComponent},
  { path: 'multiple', component: MultipleBackgroundImagesComponent},
  { path: 'triangular', component: TriangularBackgroundImagesComponent},
  { path: 'gradient', component: GradientOverlayImageComponent},
  { path: 'color', component: ColorChangingImageComponent},
  { path: 'text', component: TextColorImageComponent},
  { path: 'grid', component: GridImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
