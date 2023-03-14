import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroAddComponent } from './heroes/pages/hero-add/hero-add.component';
import { HeroDetailsComponent } from './heroes/pages/hero-details/hero-details.component';
import { HomeComponent } from './heroes/pages/home/home.component';

//TODO: hacer lo del lazyloading
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "heroes/new", component: HeroAddComponent },
  { path: "heroes/:id/edit", component: HeroAddComponent },
  { path: "heroes/:id", component: HeroDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
