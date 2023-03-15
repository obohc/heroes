import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//TODO: hacer lo del lazyloading
const routes: Routes = [
  { path: "heroes", loadChildren: () => import("./heroes/pages/pages.module").then(m => m.PagesModule)},
  { path: "", redirectTo: "heroes", pathMatch: "full" },
  { path: "**", redirectTo: "heroes", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
