import { Component, computed } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent],
  template: ` 
    <p>I am the home component</p>
    <p>Hi, {{name()}}!</p>
    <app-welcome></app-welcome>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = signal('Josh');

  preferences = signal({
    fast: true,
    comfortable: true,
    expensive: false,
  });

  comfortable = computed(()=> this.preferences().comfortable);

  message = computed(() => {
    const message = `${this.name()} likes it ${this.comfortable() ? 'comfortable' : 'uncomfortable'}`;
  return message;
  })
}
