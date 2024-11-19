import { Component } from '@angular/core';

@Component({
  selector: 'app-invito',
  templateUrl: './invito.component.html',
  styleUrls: ['./invito.component.css']
})
export class InvitoComponent {
  // Generazione di un codice di invito simulato (può essere sostituito da una chiamata API)
  referralCode: string = this.generateReferralCode();
  // Lista dei referral invitati
  referralList: string[] = [];
  // Nome dell'amico da invitare
  friendName: string = '';

  constructor() {}

  // Funzione per generare un codice di invito
  generateReferralCode(): string {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  }

  // Funzione per aggiungere un referral alla lista
  addReferral(): void {
    if (this.friendName.trim()) {
      this.referralList.push(this.friendName);
      this.friendName = ''; // Reset del campo di input
    }
  }

  // Funzione per copiare il codice di invito negli appunti
  copyReferralCode(): void {
    navigator.clipboard.writeText(this.referralCode).then(() => {
      alert('Codice di invito copiato negli appunti!');
    });
  }
}