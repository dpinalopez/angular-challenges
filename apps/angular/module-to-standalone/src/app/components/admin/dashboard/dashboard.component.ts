import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    Dashboard
    <button
      routerLink="create-user"
      class="ml-10 rounded-lg border bg-gray-700 p-2 text-white">
      Create User
    </button>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
