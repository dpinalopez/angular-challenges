import { Component } from '@angular/core';
import { NavButtonComponent } from './nav-button.component';

@Component({
  standalone: true,
  imports: [NavButtonComponent],
  selector: 'app-home',
  template: `
    <nav-button href="/foo" class="fixed left-1/2 top-3">Foo Page</nav-button>
    <div>
      <div id="top" class="h-screen bg-gray-500">
        Empty
        <a href="#bottom">Scroll Bottom</a>
      </div>
      <div id="bottom" class="h-screen bg-blue-300">
        I want to scroll each
        <a href="#top">Scroll Top</a>
      </div>
    </div>
  `,
})
export class HomeComponent {}
