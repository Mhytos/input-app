import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  template: ` <p>Hi, {{ name }}!</p> 
  <p>Do want some cookies?</p>
  <button (click)="cookiesAccepted.emit(true)">I do!</button>
  `,
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  @Input() name = 'friend' ;
  @Output() cookiesAccepted = new EventEmitter();
}
