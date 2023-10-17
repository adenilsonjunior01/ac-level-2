import { Component, Injector, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { BaseResource } from './app/shared/resources';

const TITLE_DEFAULT = 'Angular Certification Level 2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseResource implements OnInit {
  constructor(protected override injector: Injector, private title: Title) {
    super(injector);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        switchMap((route) => route.data)
      )
      .subscribe({
        next: (event) => {
          if (event['title']) {
            return this.title.setTitle(`${TITLE_DEFAULT} - ${event['title']}`);
          }
          return this.title.setTitle(TITLE_DEFAULT);
        },
      });
  }
}
