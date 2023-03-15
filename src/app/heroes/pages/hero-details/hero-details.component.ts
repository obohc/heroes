import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, tap, switchMap } from 'rxjs';

import { HeroesService } from './../../services/heroes.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero?: Hero;

  constructor(private heroesAPI: HeroesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.heroesAPI.getHeroById(params["id"]))
    )
    .subscribe({
      next: (hero: Hero) => this.hero = hero,
      error: () => this.router.navigateByUrl("/")
    });
  }

}
