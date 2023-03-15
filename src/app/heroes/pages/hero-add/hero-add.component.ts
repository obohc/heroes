import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, map } from 'rxjs';

import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmationWindowComponent } from './../../../shared/components/confirmation-window/confirmation-window.component';


@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {

  form: FormGroup;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      superhero: ['', Validators.required],
      publisher: [''],
      alter_ego: [''],
      characters: [''],
      first_appearance: ['']
    })
  }

  ngOnInit() {
    this.isEditing = this.router.url.includes("edit");

    if (!this.isEditing) {
      return;
    }

    this.route.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe({
        next: (hero: Hero) => {
          this.form.patchValue({
            superhero: hero.superhero,
            publisher: hero.publisher,
            alter_ego: hero.alter_ego,
            characters: hero.characters,
            first_appearance: hero.first_appearance
          })
        },
        error: (err => console.log(err)) //TODO: mostrar algún mensaje de error o algo en pantalla? pq la id es incorrecta
      });
  }

  save() {
    if (this.isEditing) {  
      this.heroesService
        .editHero(this.form.value)
        .subscribe( () => this.showSnackBar("Héroe actualizado"));
    }
    else { // si no hay id es pq se está añadiendo un nuevo héroe
      this.heroesService
        .addHero(this.form.value)
        .subscribe((hero: Hero) => {
          this.showSnackBar("Héroe guardado");
          this.router.navigateByUrl(`/heroes/${hero.id}/edit`);
        });      
    }
  }

  showSnackBar(msg: string){
    this.snackBar.open(msg, "OK", { duration: 3000 });
  }
}

