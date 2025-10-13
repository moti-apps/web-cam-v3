import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from '../../interfaces/nav-item.interface';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    TranslocoModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  public navItems: NavItem[] = [
    {
      text: 'NAV.HOME',
      router: '/home',
    },
    {
      text: 'NAV.about_us',
      router: 'about-us',
    },
    {
      text: 'NAV.available_properties',
      router: 'available-properties',
    },
    {
      text: 'NAV.contact_us',
      router: 'contact-us',
    },
  ];
  isOpen = false;
  isLangOpen = false;
  isLandingPage = false;
  activeRoute = '';
  selectedLang = localStorage.getItem('language') || 'en';
  cities = [
    {
      id: 'en',
      name: 'NAV.ENGLISH',
      avatar: 'assets/images/english-logo.svg',
    },
    {
      id: 'ar',
      name: 'NAV.ARABIC',
      avatar: 'assets/images/arabic-logo.svg',
    },
  ];

  constructor(
    private router: Router,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        let activeRouter = this.router.url.split('/')[1];
        this.activeRoute = activeRouter.split('-').join('_');
        activeRouter === 'home'
          ? (this.isLandingPage = true)
          : (this.isLandingPage = false);
      });
  }

  changeLanguage(event: any) {
    this.selectedLang = event.id;
    this.translocoService.setActiveLang(`${this.selectedLang}`);
    localStorage.setItem('language', this.selectedLang);
    this.updateDirection(this.selectedLang);
  }

  /**
   * Updates the direction of the document based on the specified language.
   *
   * @param lang - The language code to determine the direction.
   */
  updateDirection(lang: string) {
    const rtlLanguages = ['ar'];
    const isRtl = rtlLanguages.includes(lang);
    document.body.setAttribute('lang', lang);
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
  }
}
