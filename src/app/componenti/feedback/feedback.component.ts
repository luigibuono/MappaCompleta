import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  // Variabili per la recensione
  rating: number = 0;
  comment: string = '';
  
  // Array per le recensioni
  reviews = [
    { rating: 5, comment: "Ottimo prodotto!" },
    { rating: 4, comment: "Buono, ma potrebbe migliorare." }
  ];

  constructor() {}

  // Metodo per inviare una recensione
  submitReview(): void {
    if (this.rating && this.comment) {
      this.reviews.push({ rating: this.rating, comment: this.comment });
      this.rating = 0;  // Resetta la valutazione
      this.comment = '';  // Resetta il commento
    }
  }
}