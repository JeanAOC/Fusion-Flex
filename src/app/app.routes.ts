import { Routes } from '@angular/router';
import { VitaminaCComponent } from './vitamina-c/vitamina-c.component';
import { FusionFlexComponent } from './fusion-flex/fusion-flex.component';

export const routes: Routes = [
    { path: 'vitamina-c', component: VitaminaCComponent },
    { path: 'fusion-flex', component: FusionFlexComponent },
    { path: '', redirectTo: '/vitamina-c', pathMatch: 'full' },
    { path: '**', redirectTo: '/vitamina-c' }
];
