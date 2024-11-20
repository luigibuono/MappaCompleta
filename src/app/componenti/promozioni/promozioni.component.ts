import { Component } from '@angular/core';

@Component({
  selector: 'app-promozioni',
  templateUrl: './promozioni.component.html',
  styleUrls: ['./promozioni.component.css']
})
export class PromozioniComponent {
  promoCode: string = ''; // Codice inserito dall'utente
  message: string | null = null; // Messaggio di stato
  isSuccess: boolean = false; // Stato del messaggio
  discountApplied: boolean = false; // Stato del codice applicato
  discountPercentage: number = 0; // Percentuale di sconto
  originalPrice: number = 100; // Prezzo originale
  discountedPrice: number = 100; // Prezzo scontato

  // Lista dei codici promozionali validi
  validPromoCodes: { code: string; discount: number }[] = [
    { code: 'WELCOME10', discount: 10 },
    { code: 'SPRING20', discount: 20 },
    { code: 'SUMMER30', discount: 30 }
  ];

  validatePromoCode(): void {
    const promo = this.validPromoCodes.find(p => p.code === this.promoCode.trim().toUpperCase());
    if (promo) {
      this.discountApplied = true;
      this.discountPercentage = promo.discount;
      this.discountedPrice = this.originalPrice - (this.originalPrice * (promo.discount / 100));
      this.message = 'Codice promozionale applicato con successo!';
      this.isSuccess = true;
    } else {
      this.discountApplied = false;
      this.message = 'Codice promozionale non valido.';
      this.isSuccess = false;
    }
  }
}