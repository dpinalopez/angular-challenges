import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    Contact Dashboard

    <button
      routerLink="create-contact"
      class="ml-10 rounded-lg border bg-gray-700 p-2 text-white">
      Create contact
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
