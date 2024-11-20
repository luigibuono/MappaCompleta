import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  // Array di FAQ
  faqs = [
    {
      question: 'Come posso recuperare la mia password?',
      answer: 'Puoi recuperare la tua password cliccando su "Password dimenticata" nella pagina di login.',
      open: false,
    },
    {
      question: 'Come contattare il supporto?',
      answer: 'Puoi contattare il supporto compilando il modulo qui sotto.',
      open: false,
    },
    {
      question: 'Quali sono i metodi di pagamento accettati?',
      answer: 'Accettiamo pagamenti con carta di credito, PayPal e bonifico bancario.',
      open: false,
    },
  ];

  // Stato del modulo di supporto
  supportForm = {
    name: '',
    email: '',
    message: '',
  };

  // Metodo per aprire/chiudere una FAQ
  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }

  // Metodo per inviare una richiesta di supporto
  submitSupportRequest() {
    if (this.supportForm.name && this.supportForm.email && this.supportForm.message) {
      console.log('Richiesta inviata:', this.supportForm);
      alert('La tua richiesta è stata inviata con successo!');
      // Reset del modulo
      this.supportForm = {
        name: '',
        email: '',
        message: '',
      };
    } else {
      alert('Per favore compila tutti i campi!');
    }
  }
}