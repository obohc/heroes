import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';

import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {

  hero: Hero = {
    id: '',
    superhero: '',
    publisher: '',
    alter_ego: '',
    characters: '',
    first_appearance: ''
  };
  isEditing: boolean = false;

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.isEditing = this.router.url.includes("edit");

    if (!this.isEditing) {
      return;
    }

    this.route.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe({
        next: (hero: Hero) => this.hero = hero,
        error: (err => console.log(err))
      });
  }

  save() {
    if (this.hero.superhero.trim().length == 0) {
      return;
    }

    if (this.hero.id) {  // si la id está establecida es pq he podido recuperar del url el parámetro id, por lo tanto se hace update
      this.heroesService
        .editHero(this.hero)
        .subscribe( () => this.showSnackBar("Héroe actualizado"));
    }
    else { // si no hay id es pq se está añadiendo un nuevo héroe
      this.heroesService
        .addHero(this.hero)
        .subscribe((hero: Hero) => {
          this.showSnackBar("Héroe guardado");
          this.router.navigateByUrl(`/heroes/${hero.id}/edit`);
        });      
    }
  }

  delete(){}

  // delete(){
  //   // Antes de borrar le muestro un dialog de confirmación
  //   const dialog = this.dialog.open(ConfirmationWindowComponent, {width: "300px", data: this.hero});
    
  //   // una vez cerrada la ventana, o bien me devuelve undefined o true (si confirma el borrado)
  //   dialog.afterClosed().pipe(
  //     switchMap(confirmation => {
  //       if (!confirmation) {
  //         // tengo que devolver un observable sí o sí, pues me creo uno sencillo que devuelve el valor false
  //         return of(false); 
  //       }
  //       return this.heroesService.deleteHero(this.hero.id!)
  //     })
  //   ).subscribe(resp => {
  //     // si en la ventana de confirmación se confirma el borrado, el delete devuelve un objeto con la propiedad
  //     // deleteCount que especifica cuantos registros han sido borrados. 
  //     // si cancelo el borrado devuelve un false (que es lo que he puesto en el switchMap)
  //     // por tanto, si se borra el héroe, me devuelve a la lista. Y si no, simplemente se cierra la ventana
  //     if (resp) this.navigateBack();
  //   });
  // }


  showSnackBar(msg: string){
    this._snackBar.open(msg, "OK", { duration: 3000 });
  }


  navigateBack() {
    this.router.navigate(["/projects/heroes-app/heroes"]);
  }
}

