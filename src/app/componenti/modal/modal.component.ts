import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    // Variabile per controllare la visibilità del modal
    showModal: boolean = false;
  
    // Variabile per memorizzare l'azione da confermare
    actionToConfirm: string = '';
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // Mostra il modal e imposta l'azione
    openModal(action: string) {
      this.actionToConfirm = action;
      this.showModal = true;  // Mostra il modal
    }
  
    // Chiude il modal senza fare nulla
    closeModal() {
      this.showModal = false;  // Nasconde il modal
    }
  
    // Conferma l'azione e esegui l'operazione
    confirmAction() {
      console.log(`${this.actionToConfirm} confermata!`);
      this.showModal = false;  // Nasconde il modal
    }
  
}
