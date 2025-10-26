import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FindYourDream } from './shared/components/find-your-dream/find-your-dream.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'moonstone-website';
  constructor() {
    const lang = localStorage.getItem('lang') || 'en';
    document.body.setAttribute('lang', lang);
  }
}
