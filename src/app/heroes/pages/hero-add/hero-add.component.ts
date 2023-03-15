import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {

  form: FormGroup;
  isEditing: boolean = false;

  constructor (
    private fb: FormBuilder,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    this.form = this.fb.group({
      id: [''],
      superhero: ['', Validators.required],
      publisher: [''],
      alter_ego: [''],
      characters: [''],
      first_appearance: ['']
    })
  }

  ngOnInit(): void {
    this.isEditing = this.router.url.includes("edit");

    if (!this.isEditing) {
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroesService.getHeroById(id).subscribe((hero: Hero) => {
        this.form.patchValue({
          id: hero.id,
          superhero: hero.superhero,
          publisher: hero.publisher,
          alter_ego: hero.alter_ego,
          characters: hero.characters,
          first_appearance: hero.first_appearance
        })
      })
    }
  }

  public submit(): void {
    if (this.isEditing) {  
      this.heroesService.editHero(this.form.value).subscribe( () => {
        this.showSnackBar(this.translate.instant("snackbar.upd"));
        this.router.navigateByUrl("/");        
      });
    }
    else {
      this.heroesService.addHero(this.form.value).subscribe((hero: Hero) => {
          this.showSnackBar(this.translate.instant("snackbar.add"));
          this.router.navigateByUrl("/");
      });      
    }  
  }

  private showSnackBar(msg: string): void {
    this.snackBar.open(msg, "OK", { duration: 3000 });
  }
}

