import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gestione-preferenze-utente',
  templateUrl: './gestione-preferenze-utente.component.html',
  styleUrls: ['./gestione-preferenze-utente.component.css']
})
export class GestionePreferenzeUtenteComponent {
  preferences = {
    theme: 'light',  // valore predefinito
    language: 'en',
    notifications: true
  };

  constructor(private translate: TranslateService) {
    // Carica le preferenze salvate dal localStorage
    const savedPreferences = JSON.parse(localStorage.getItem('preferences') || '{}');
    if (savedPreferences) {
      this.preferences = savedPreferences;
      this.applyTheme();  // Applica il tema salvato all'avvio
      this.translate.use(this.preferences.language); // Imposta la lingua
    }
  }

  // Metodo per aggiornare le preferenze
  updatePreferences(): void {
    // Salva le preferenze nell'oggetto e nel localStorage
    localStorage.setItem('preferences', JSON.stringify(this.preferences));
    this.applyTheme();
    this.translate.use(this.preferences.language);  // Cambia la lingua dinamicamente
  }

  applyTheme(): void {
    const themeContainer = document.getElementById('theme-container');
  
    if (themeContainer) {
      if (this.preferences.theme === 'dark') {
        themeContainer.style.backgroundColor = 'black';  // Imposta lo sfondo a nero
        themeContainer.style.color = 'white';  // Imposta il colore del testo a bianco
      } else {
        themeContainer.style.backgroundColor = 'white';  // Imposta lo sfondo a bianco
        themeContainer.style.color = 'black';  // Imposta il colore del testo a nero
      }
    }
  }
  
}