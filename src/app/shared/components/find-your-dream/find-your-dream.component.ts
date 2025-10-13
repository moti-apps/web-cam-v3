import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-find-your-dream',
  standalone: true,
  imports: [RouterModule, TranslocoModule],
  templateUrl: './find-your-dream.component.html',
  styleUrls: ['./find-your-dream.component.scss'],
})
export class FindYourDream {
  constructor(private router: Router) {}
  hideContent = false;
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        let activeRouters = this.router.url.split('/');

        if (
          (activeRouters.includes('available-properties') &&
            activeRouters.length == 2) ||
          activeRouters.includes('contact-us')
        ) {
          this.hideContent = true;
        } else {
          this.hideContent = false;
        }
      });
  }
}
