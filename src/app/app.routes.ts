import { Routes } from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {InDevelopmentComponent} from './pages/in-development/in-development.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
      },
    ],
  },
  {path: 'notfound', component: NotFoundComponent},
  {path: 'error', component: NotFoundComponent},
  {path: 'dev', component: InDevelopmentComponent},
  { path: '**', redirectTo: '/notfound' },
];
