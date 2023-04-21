import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'prueba-w2m';

  constructor(private translate: TranslateService) {
    this.translate.use(localStorage.getItem("language") || translate.getDefaultLang());
  }
}
