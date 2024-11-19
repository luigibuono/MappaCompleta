import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
    private socket$: WebSocketSubject<any>;
    private messagesSubject: Subject<string> = new Subject<string>();
  
    constructor() {
      // Connessione al server WebSocket
      this.socket$ = webSocket('ws://localhost:8080');  // Assicurati che l'URL del tuo WebSocket sia corretto
  
      // Ascolta i messaggi in arrivo dal server WebSocket
      this.socket$.subscribe({
        next: (message) => {
          console.log('Message received:', message);
          this.messagesSubject.next(message); // Passa il messaggio ai subscriber
        },
        error: (err) => console.error('Errore WebSocket: ', err),
        complete: () => console.log('Connessione WebSocket chiusa')
      });
    }
  
    // Invia un messaggio al server WebSocket
    sendMessage(message: string): void {
      this.socket$.next(message);
    }
  
    // Restituisce un Observable per i messaggi ricevuti
    receiveMessages(): Observable<string> {
      return this.messagesSubject.asObservable();
    }
  
    // Chiudi la connessione WebSocket
    closeConnection(): void {
      this.socket$.complete();
    }
  }