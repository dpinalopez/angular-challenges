import { Route } from '@angular/router';
import { CreateuserComponent } from './components/admin/createuser/createuser.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
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
    component: DashboardComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'create-user', // child route path
        component: CreateuserComponent, // child route component that the router renders
      },
    ],
  },
];

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
// ];
