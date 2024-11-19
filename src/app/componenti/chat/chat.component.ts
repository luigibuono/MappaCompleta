import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../web-socket.service';  // Servizio WebSocket che creeremo

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string = ''; // Messaggio in input
  messages: string[] = []; // Lista dei messaggi ricevuti

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // Iscriviti per ricevere i messaggi in tempo reale
    this.webSocketService.receiveMessages().subscribe((message) => {
      this.messages.push(message); // Aggiungi i messaggi alla lista
    });
  }

  // Invia il messaggio al server WebSocket
  sendMessage(): void {
    if (this.message.trim()) {
      this.webSocketService.sendMessage(this.message); // Invia il messaggio al server
      this.messages.push(this.message); // Aggiungi il messaggio anche alla lista di messaggi
      this.message = ''; // Resetta il campo di input
    }
  }
}