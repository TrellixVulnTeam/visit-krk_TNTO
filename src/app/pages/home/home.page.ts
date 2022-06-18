import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
    public translate: TranslateService,
  ) {
    localStorage.setItem('language', 'eng');
    this.translate.setDefaultLang('eng');
    this.translate.use('eng');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  goToMenuPage(): void {
    this.router.navigateByUrl('/history');
  }
}
