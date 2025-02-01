import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { VitaminaCComponent } from './vitamina-c/vitamina-c.component';
import { FusionFlexComponent } from './fusion-flex/fusion-flex.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vitamina-c', component: VitaminaCComponent },
    { path: 'fusion-flex', component: FusionFlexComponent },
    { path: '**', redirectTo: '' }
];

export const appConfig = {
    providers: [
      provideRouter(
        routes,
        withInMemoryScrolling({
          scrollPositionRestoration: 'top', // Restablece el scroll al principio de la página
          anchorScrolling: 'enabled' // Opcional: Habilita el scroll a anclajes
        })
      )
    ]
  };