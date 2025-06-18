import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CreateComponent } from './pages/create/create.component';
import { CommunityComponent } from './pages/community/community.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'create', component: CreateComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent }
];
