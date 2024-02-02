import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_TOKEN } from '../../app.config';

@Component({
  selector: 'app-homeuser',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    -- User Panel --
    <div class="flex items-center gap-2">
      <button
        routerLink="home"
        class="rounded-md border border-blue-400 px-4 py-2">
        Home
      </button>
      <button
        routerLink="contact"
        class="rounded-md border border-blue-400 px-4 py-2">
        Contact
      </button>
      More buttons ...
    </div>
    <router-outlet></router-outlet>
    <section>
      LoadedToken
      {{ token }}
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  token = '';
  constructor(@Inject(APP_TOKEN) private config: string) {
    this.token = config;
  }
}
