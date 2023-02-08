import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('catch del interceptor');
        switch (err.status) {
          case 404:
            console.log('caso 404 del interceptor');

            // se puede retornar un error personalizdao en base a lo que envie el backend
            const error = new Error('Not found');

            console.log('se retorna un error personalizado');
            return throwError(() => error);
          default:
            return throwError(() => err);
        }
      })
    );
  }
}
