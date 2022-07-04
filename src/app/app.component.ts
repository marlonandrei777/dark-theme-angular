import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- o header vai estar em todas as paginas entao ele fica aq -->
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'dark-theme';
}
