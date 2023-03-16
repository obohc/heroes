import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent { 

  constructor(
    private translate: TranslateService, 
    private iconRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ){ 
    iconRegistry.addSvgIcon('spanish', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/es.svg'));
    iconRegistry.addSvgIcon('english', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/en.svg'));
  }

  public setLanguage(selectedLang: string) {
    localStorage.setItem("language", selectedLang);
    this.translate.use(selectedLang);
  }
}
