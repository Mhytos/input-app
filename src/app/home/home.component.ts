import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent],
  template: `
    <app-welcome
     [name]= 'user.name'
     (cookiesAccepted)="handleCookies()"
     /> 
    <p>I am the home component</p>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = signal("Josh");

  handleCookies() {
    console.log('Do something!')
  }
}
