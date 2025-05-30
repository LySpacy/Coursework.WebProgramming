import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {
  code: string = '404';
  message: string = 'Ресурс не найден.';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('notfound')) {
      this.code = '404';
      this.message = 'Ресурс не найден';
    } else if (url.includes('error')) {
      this.code = '403';
      this.message = 'Нет доступа';
    }
  }
}
