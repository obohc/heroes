import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero?: Hero;

  constructor(
    private heroesService: HeroesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.heroesService.getHeroById(id).subscribe({
        next: (hero: Hero) => this.hero = hero,
        error: () => this.router.navigateByUrl("/")
      });
    }
  }
}
