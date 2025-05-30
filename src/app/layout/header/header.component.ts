import { Component } from '@angular/core';
import {NavigationItem} from '../core/interfaces/navigation/navigation.interface';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  navigateItems: Array<NavigationItem> = [
    {
      name: 'Проекты',
      url: '/projects',
    },
    {
      name: 'Спринты',
      url: '/inDevelopment',
    },
    {
      name: 'Задачи',
      url: '/inDevelopment'
    },
    {
      name: 'Пользователи',
      url: '/inDevelopment'
    }
  ];

  isActiveRoute(routePath: string): boolean {
    return this.router.url === `/${routePath}`;
  }

  toRoute(url: string): void {

  }
}
