import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  generateRandom(len: number) {
    return Array.from({ length: len },
      () => Math.floor(Math.random() * 9)
    );
  }

  generateEmpty(len: number) {
    return Array.from({ length: len }, () => 0)
  }
}
