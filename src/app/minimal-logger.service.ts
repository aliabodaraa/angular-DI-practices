import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class MinimalLogger {
  // class-interface reduces the API to two members:
  abstract logs: string[];
  abstract logInfo: (msg: string) => void;
}
