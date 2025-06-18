import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CreateComponent } from './pages/create/create.component';
import { CommunityComponent } from './pages/community/community.component';
import { AboutComponent } from './pages/about/about.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

export const appConfig = {
  providers: [
    provideRouter(routes),
  ],
  standaloneComponents: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExploreComponent,
    CreateComponent,
    CommunityComponent,
    AboutComponent,
  ]
};
