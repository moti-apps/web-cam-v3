import { AvailablePropertiesComponent } from './available-properties.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

export const AvailablePropertiesRoutes = [
  {
    path: '',
    component: AvailablePropertiesComponent,
  },
  {
    path: ':id',
    component: PropertyDetailsComponent,
  },
];
