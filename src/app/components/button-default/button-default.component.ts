import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'button[app-button-default]',
  standalone: true,
  imports: [ButtonModule],
  // templateUrl: './button-default.component.html',
  template: `<ng-content />`,
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {}
