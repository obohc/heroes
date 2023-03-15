import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';
import { ConfirmationWindowComponent } from 'src/app/shared/components/confirmation-window/confirmation-window.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @ViewChild(MatPaginator) private paginator?: MatPaginator;
  displayedColumns: string[] = ['superhero', 'publisher', 'alter_ego', 'actions'];
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource();

  constructor(private heroesAPI: HeroesService, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getHeroesList();
  }
  
  
  public deleteHero(hero: Hero): void {
    const dialog = this.dialog.open(ConfirmationWindowComponent, {width: "300px", data: hero.superhero});
    
    dialog.afterClosed().subscribe((confirmation: boolean) => {      
      if (confirmation) this.heroesAPI.deleteHero(hero.id).subscribe(() => this.getHeroesList());
    });
  }

  public filterList(query: string): void {
    this.heroesAPI.search(query).subscribe( (filteredHeroes: Hero[]) => this.updateTableDataSource(filteredHeroes));
  }
    
  private getHeroesList(): void {
    this.heroesAPI.getHeroes().subscribe( (heroes: Hero[]) => this.updateTableDataSource(heroes));    
  }

  private updateTableDataSource(newData: Hero[]): void {
    this.dataSource = new MatTableDataSource<Hero>(newData);
    this.dataSource.paginator = this.paginator!;
  }

}
