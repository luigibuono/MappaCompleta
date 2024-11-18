import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  registrazioneForm: FormGroup;
  isSubmitted = false; // Stato per mostrare il messaggio di successo o errore

  constructor(private fb: FormBuilder) {
    // Inizializza il form con FormBuilder e aggiunge le validazioni
    this.registrazioneForm = this.fb.group({
      nome: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Metodo per gestire la sottomissione del form
  onSubmit() {
    this.isSubmitted = true; // Cambia lo stato a "inviato"
    
    if (this.registrazioneForm.valid) {
      console.log('Registrazione riuscita:', this.registrazioneForm.value); // Solo per debug
    } else {
      console.log('Form non valido'); // Solo per debug
    }
  }

  }

