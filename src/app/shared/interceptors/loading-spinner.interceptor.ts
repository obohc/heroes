import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';

import { SpinnerService } from './../../heroes/services/spinner.service';

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {

  private requestCount = 0;

  constructor(private spinner: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (!this.requestCount) {
      this.spinner.show();
    }
    this.requestCount++;

    return next.handle(request).pipe(
      //fuerzo un delay de cara a que en la prueba pueda verse el loader una fracción de segundo
      delay(200),
      finalize(() => {
        this.requestCount--;
        if (!this.requestCount) {
          this.spinner.hide()          
        }
      }),
    );
  }
}