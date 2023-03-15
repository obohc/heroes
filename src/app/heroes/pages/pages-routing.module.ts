import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "new", loadChildren: () => import("./hero-add/hero-add.module").then(m => m.HeroAddModule)},
  { path: ":id/edit", loadChildren: () => import("./hero-add/hero-add.module").then(m => m.HeroAddModule)},
  { path: ":id", loadChildren: () => import("./hero-details/hero-details.module").then(m => m.HeroDetailsModule)},
  { path: "", loadChildren: () => import("./hero-list/hero-list.module").then(m => m.HeroListModule)},
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
