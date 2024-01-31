import { Route } from '@angular/router';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'create-user',
        component: CreateuserComponent,
      },
    ],
  },
];

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
// ];
