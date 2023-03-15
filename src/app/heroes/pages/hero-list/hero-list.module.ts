import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';

import { HeroListComponent } from './hero-list.component';

const routes: Routes = [
  { path: "", component: HeroListComponent },
];

@NgModule({
  declarations: [HeroListComponent],
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
    SearchModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
