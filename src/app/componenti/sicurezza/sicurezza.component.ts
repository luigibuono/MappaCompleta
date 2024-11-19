import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sicurezza',
  templateUrl: './sicurezza.component.html',
  styleUrls: ['./sicurezza.component.css']
})
export class SicurezzaComponent {
  title = 'Sicurezza Web: CORS, XSS, CSRF';

  // Simula il comportamento di una richiesta CORS
  corsError: boolean = false;

  // Eseguiamo una chiamata che simula un errore CORS
  simulateCORSRequest() {
    this.http.get('https://example.com/api') // Un URL che non supporta CORS
      .subscribe(
        (response) => console.log(response),
        (error) => {
          this.corsError = true;
          console.error('Errore CORS:', error);
        }
      );
  }

  // Variabile per XSS
  xssInput: string = '';
  xssOutput: string = '';

  // Eseguiamo un'operazione che simula un XSS
  simulateXSS() {
    this.xssOutput = this.xssInput;  // Qui stiamo direttamente inserendo l'input senza sanificarlo
  }

  // Simuliamo una richiesta CSRF (che normalmente avviene tramite una sessione già autenticata)
  csrfMessage: string = '';
  simulateCSRF() {
    // Simuliamo l'invio di una richiesta che potrebbe essere vulnerabile a CSRF
    // Ad esempio, supponiamo che la sessione dell'utente sia già attiva sul server
    this.http.post('https://example.com/submit', { data: 'some data' }, { withCredentials: true })
      .subscribe(
        (response) => console.log('CSRF Request Success:', response),
        (error) => {
          this.csrfMessage = 'Errore CSRF: richiesta rifiutata o non autorizzata';
          console.error('Errore CSRF:', error);
        }
      );
  }

  constructor(private http: HttpClient) {}
}
