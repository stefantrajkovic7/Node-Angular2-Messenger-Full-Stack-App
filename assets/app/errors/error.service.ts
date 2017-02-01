import { Injectable, EventEmitter } from '@angular/core';
import { Error } from './error.model';

@Injectable()
export class ErrorService {
  errorOcurred = new EventEmitter<Error>();

  handleError(error: any) {
    const errorData = new Error(error.title, error.error.message);
    this.errorOcurred.emit(errorData);
  }
}
