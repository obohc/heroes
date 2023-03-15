import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private API_URL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  public addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.API_URL}/heroes`, hero);
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`);
  }

  public getHeroesPaginated(page: number): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes?_page=${page}`);
  }

  public getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.API_URL}/heroes/${id}`);
  }

  public editHero(hero: Hero): Observable<Hero> {
    return this.http.patch<Hero>(`${this.API_URL}/heroes/${hero.id}`, hero);
  }

  public deleteHero(id: string): Observable<Object> {
    return this.http.delete(`${this.API_URL}/heroes/${id}`);
  }

  public search(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}/heroes`).pipe(
      map((heroes: Hero[]) => {
        return heroes.filter((hero: Hero) => 
          hero.superhero.toLowerCase().includes(query.toLowerCase().trim()));
      }),
    );
  }
}
