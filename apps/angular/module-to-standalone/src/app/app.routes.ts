import { Route } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CreatecontactComponent } from './components/createcontact/createcontact.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { UserComponent } from './components/user/user.component';

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
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: HomeuserComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
        children: [
          {
            path: 'create-contact',
            component: CreatecontactComponent,
          },
        ],
      },
    ],
  },
];
