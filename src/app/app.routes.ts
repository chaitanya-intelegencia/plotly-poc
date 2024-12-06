import { Routes } from '@angular/router';
import { HorizontalBarComponent } from '../app/horizontal-bar/horizontal-bar.component';
import { AppComponent } from './app.component'
import { ClickbarComponent } from './clickbar/clickbar.component';
import { ChartStudioComponent } from './chart-studio/chart-studio.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, // Default route
    { path: 'horizontal', component: HorizontalBarComponent },
    { path: 'onclick', component: ClickbarComponent },
    { path: 'circle', component: ChartStudioComponent },
  ];
