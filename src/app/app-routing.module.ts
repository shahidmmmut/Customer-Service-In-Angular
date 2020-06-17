import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import {PricingComponent} from './pricing/pricing.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {DownloadComponent} from './download/download.component';
const routes: Routes = [
  { path: '', redirectTo: '/pricing', pathMatch: 'full' },
  { path: 'Home', component:  HomeComponent },
  { path: 'Aboutus', component:  AboutComponent },
  { path: 'pricing', component:  PricingComponent },
  { path: 'testimonial', component:  TestimonialComponent },
  { path: 'download', component:  DownloadComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
