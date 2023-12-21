import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent],
  template: ` 
    <p>I am the home component</p>
    <p>Hi, {{name()}}!</p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = signal('Josh');

  handleCookies() {
    console.log('Do something!')
  }
}
