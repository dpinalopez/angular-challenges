import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-homeuser2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>Home User Component</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homeuser2Component {}
