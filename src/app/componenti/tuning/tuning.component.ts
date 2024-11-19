import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TuningComponent implements OnInit, OnDestroy{
  // 2. Usare Input correttamente e evitare binding non necessari
  @Input() data: any = { items: [] }; // Inizializza con un oggetto vuoto
  @Input() observableData$!: Observable<any>;

  // Variabile per mantenere il risultato dei calcoli ed evitare operazioni nel template
  calculatedValue: number = 0;

  // Gestione delle sottoscrizioni agli observable
  private subscriptions: Subscription[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Simula l'emissione di dati se observableData$ non è passato
    if (!this.observableData$) {
      this.observableData$ = new Observable((observer) => {
        observer.next({ items: [1, 2, 3, 4] });
        observer.complete();
      });
    }
    
    this.subscriptions.push(
      this.observableData$.subscribe((data) => {
        console.log('Received data:', data); // Verifica i dati
        this.data = data;
        // Non calcolare calculatedValue qui
      })
    );
  }
  
  


  calculateHeavyOperation(data: any): number {
    // Se data è un oggetto che ha una proprietà 'items' che è un array
    if (data && Array.isArray(data.items)) {
      return data.items.reduce((acc: number, value: number) => acc + value, 0);
    } else {
      console.warn('Data or data.items is not an array:', data);
      return 0;
    }
  }
  

  performHeavyOperation() {
    console.log('Button clicked, performing heavy operation...');
    console.log('Data for calculation:', this.data);  // Verifica i dati prima di fare il calcolo
    this.cd.detach(); // Disabilita temporaneamente il change detection
    // Esegui l'operazione pesante solo quando clicchi sul bottone
    this.calculatedValue = this.calculateHeavyOperation(this.data);
    console.log('Calculated value:', this.calculatedValue);  // Verifica il risultato del calcolo
    this.cd.reattach(); // Riattiva il change detection
  }
  
  
  // 3. TrackBy per ngFor per ottimizzare il rendering delle liste
  trackByFn(index: number, item: any): number {
    return item.id; // Ritorna un ID univoco per ciascun elemento
  }

  ngOnDestroy(): void {
    // Annulla la sottoscrizione da tutti gli observable
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
