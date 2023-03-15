import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ConfirmationWindowComponent } from './confirmation-window.component';


@NgModule({
  declarations: [ConfirmationWindowComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [ HttpClient ],
      }
    }),
  ],
  exports: [ConfirmationWindowComponent]
})
export class ConfirmationWindowModule { }

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}