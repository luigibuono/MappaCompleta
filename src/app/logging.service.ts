import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  log(message: string): void {
    // Stampa nella console (puoi estenderlo per inviare i log a un server)
    console.log(`LOG: ${message}`);
  }

  warn(message: string): void {
    // Stampa un avviso nella console
    console.warn(`WARN: ${message}`);
  }

  error(message: string): void {
    // Stampa un errore nella console
    console.error(`ERROR: ${message}`);
  }
}
