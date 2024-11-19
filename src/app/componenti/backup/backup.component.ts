import { Component } from '@angular/core';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent {
 // Dati simulati dell'utente
 userData = {
  name: 'Mario Rossi',
  email: 'mario.rossi@example.com'
};

backupStatus: boolean = false;
restoreStatus: boolean = false;

constructor() {}

// Metodo per eseguire il backup dei dati nel localStorage
backupData(): void {
  // Salva i dati dell'utente nel localStorage
  localStorage.setItem('userData', JSON.stringify(this.userData));
  this.backupStatus = true;

  // Resetta lo stato dopo 3 secondi
  setTimeout(() => this.backupStatus = false, 3000);
}

// Metodo per ripristinare i dati dal localStorage
restoreData(): void {
  const savedData = localStorage.getItem('userData');

  if (savedData) {
    // Se i dati sono presenti, ripristinali
    this.userData = JSON.parse(savedData);
    this.restoreStatus = true;
  } else {
    // Se non ci sono dati salvati, mostra un messaggio
    this.restoreStatus = false;
  }

  // Resetta lo stato dopo 3 secondi
  setTimeout(() => this.restoreStatus = false, 3000);
}
}