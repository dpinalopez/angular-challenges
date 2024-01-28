import { AuthorizationService } from '@angular-challenges/module-to-standalone/core/service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injectable,
} from '@angular/core';
import { APP_TOKEN } from '../app.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    Home component

    <section class="flex items-center gap-5">
      Authorization :
      <button class="border p-2  " (click)="authorizeService.authorize()">
        Authorize
      </button>
      <button class="border p-2  " (click)="authorizeService.forbid()">
        Forbid
      </button>
      (isAuthorized: {{ authorizeService.isAuthorized$ | async }})
    </section>

    <section>LoadedToken {{ this.token }}</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@Injectable({ providedIn: 'root' })
export class HomeComponent {
  token = '';
  constructor(
    public authorizeService: AuthorizationService,
    @Inject(APP_TOKEN) private config: string,
  ) {
    this.token = config;
  }
}
