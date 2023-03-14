import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private API_URL: string = environment.API_URL;

  //TODO: borrar el último héroe del db.json

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`);
  }

  getHeroesPaginated(page: number): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes?_page=${page}`);
  }

  getHeroById(id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this.API_URL}/heroes/${id}`);
  }
   
  editHero(hero: Hero){
    return this.http.patch<Hero>(`${this.API_URL}/heroes/${hero.id}`, hero);
  }
  
  deleteHero(id: string){
    return this.http.delete(`${this.API_URL}/heroes/${id}`);
  }
  
  // search(): Observable<Hero>{
  //   return;
  // }

}
