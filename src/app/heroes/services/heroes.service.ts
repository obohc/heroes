import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private API_URL: string = environment.API_URL;

  //TODO: borrar el último héroe del db.json

  constructor(private http: HttpClient) {}

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.API_URL}/heroes`, hero);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`);
  }

  getHeroesPaginated(page: number): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes?_page=${page}`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.API_URL}/heroes/${id}`);
  }

  editHero(hero: Hero) {
    return this.http.patch<Hero>(`${this.API_URL}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string) {
    console.log("esta es la url que usaré", `${this.API_URL}/heroes/${id}`);
    return this.http.delete(`${this.API_URL}/heroes/${id}`);
  }

  search(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`).pipe(
      map((heroes: Hero[]) => {
        return heroes.filter((hero: Hero) => 
          hero.superhero.toLowerCase().includes(query.toLowerCase().trim()));
      }),
    );
  }
}
