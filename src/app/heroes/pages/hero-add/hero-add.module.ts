import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ConfirmationWindowModule } from './../../../shared/components/confirmation-window/confirmation-window.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TransformUppercaseModule } from './../../../shared/directives/transform-uppercase.module';
import { HeroAddComponent } from './hero-add.component';
import { HttpClient } from '@angular/common/http';


const routes: Routes = [
  { path: "", component: HeroAddComponent },
];

@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [ HttpClient ],
      }
    }),
    ConfirmationWindowModule,
    MaterialModule,
    TransformUppercaseModule
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}