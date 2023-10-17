import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = request.url;
    if (url.includes('/standings') || url.includes('/fixtures')) {
      const clonedRequest = request.clone({
        setHeaders: {
          'x-rapidapi-host': 'v3.football.api-sports.io',
          'x-rapidapi-key': 'aae8f15ebbcddd2e58454dc99331aabb',
        },
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
