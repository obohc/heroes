import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  heroes: Hero[] = [];
  displayedColumns: string[] = ['superhero', 'publisher', 'alter_ego', 'characters', 'first_appearance', 'actions'];
  dataSource?: MatTableDataSource<Hero, MatTableDataSourcePaginator>;

  constructor(private heroAPI: HeroesService) { }
  
  ngOnInit() {
    //TODO: meterle un pipe y activar el loading
    this.heroAPI.getHeroes().subscribe( (heroes: Hero[]) => this.updateTableDataSource(heroes));
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.heroAPI.search(filterValue).subscribe( (filteredHeroes: Hero[]) => this.updateTableDataSource(filteredHeroes));
  }
  
  
  updateTableDataSource(newData: Hero[]){    
    this.heroes = newData;
    this.dataSource = new MatTableDataSource<Hero>(this.heroes);
    this.dataSource.paginator = this.paginator!;
  }

}
