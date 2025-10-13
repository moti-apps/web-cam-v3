import { Routes } from '@angular/router';
import { HomeRoutes } from './features/home/home.routes';
import { ContactUsRoutes } from './features/contact-us/contact-us.routes';
import { AboutUSRoutes } from './features/about-us/about-us.routes';
import { AvailablePropertiesRoutes } from './features/available-properties/available-properties.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: HomeRoutes,
  },
  {
    path: 'about-us',
    children: AboutUSRoutes,
  },
  {
    path: 'contact-us',
    children: ContactUsRoutes,
  },
  {
    path: 'available-properties',
    children: AvailablePropertiesRoutes,
  },
];
