import { Component } from '@angular/core';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent {
  utente = {
    nome: '',
    email: '',
    password: ''
  };
  
  isSubmitted = false;

  // Metodo per gestire la sottomissione del form
  onSubmit() {
    this.isSubmitted = true;
    console.log("Dati dell'utente:", this.utente);
  }
}
