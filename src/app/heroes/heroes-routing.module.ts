import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import("./pages/hero-list/hero-list.module").then(m => m.HeroListModule)},
  { path: "new", loadChildren: () => import("./pages/hero-add/hero-add.module").then(m => m.HeroAddModule)},
  { path: ":id/edit", loadChildren: () => import("./pages/hero-add/hero-add.module").then(m => m.HeroAddModule)},
  { path: ":id", loadChildren: () => import("./pages/hero-details/hero-details.module").then(m => m.HeroDetailsModule)},
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
