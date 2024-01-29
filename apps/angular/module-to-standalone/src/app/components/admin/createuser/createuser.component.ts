import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [CommonModule],
  template: `
    Create User Form
    <button
      routerLink=".."
      class="ml-5 rounded-lg border bg-gray-700 p-2 text-white">
      Back
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateuserComponent {}
