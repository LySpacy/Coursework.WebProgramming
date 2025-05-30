import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-in-development',
  imports: [
    RouterLink
  ],
  templateUrl: './in-development.component.html',
  styleUrl: './in-development.component.scss'
})
export class InDevelopmentComponent {

  constructor() {
  }
}
