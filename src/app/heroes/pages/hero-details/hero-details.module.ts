import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from 'src/app/shared/material/material.module';

import { HeroDetailsComponent } from './hero-details.component';

const routes: Routes = [
  { path: "", component: HeroDetailsComponent},
];

@NgModule({
  declarations: [HeroDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [ HttpClient ],
      }
    }),
    MaterialModule
  ],
  exports: [HeroDetailsComponent]
})
export class HeroDetailsModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}