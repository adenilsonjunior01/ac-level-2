import { Injectable, Injector, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseResource implements OnDestroy {
  private _router!: Router;
  private _activatedRoute!: ActivatedRoute;

  public loading$: Subject<any> = new Subject<any>();

  constructor(protected injector: Injector) {}

  get router(): Router {
    if (!this._router) {
      this._router = this.injector.get(Router);
    }
    return this._router;
  }

  get activatedRoute(): ActivatedRoute {
    if (!this._activatedRoute) {
      this._activatedRoute = this.injector.get(ActivatedRoute);
    }
    return this._activatedRoute;
  }

  public ngOnDestroy(): void {
    this.loading$?.complete();
  }
}
