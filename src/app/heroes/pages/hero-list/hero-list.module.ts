import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { SearchModule } from 'src/app/shared/components/search/search.module';

import { HeroListComponent } from './hero-list.component';

const routes: Routes = [
  { path: "", component: HeroListComponent },
];

@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    SearchModule,
    RouterModule
  ],
  exports: [HeroListComponent]
})
export class HeroListModule { }
