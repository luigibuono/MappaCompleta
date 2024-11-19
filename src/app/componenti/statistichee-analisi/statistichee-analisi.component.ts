import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistichee-analisi',
  templateUrl: './statistichee-analisi.component.html',
  styleUrls: ['./statistichee-analisi.component.css']
})
export class StatisticheeAnalisiComponent implements OnInit {
  // Dati simulati per l'esempio (ad esempio, vendite giornaliere)
  salesData: number[] = [150, 200, 250, 300, 350, 400, 450];
  
  // Variabili per memorizzare le statistiche calcolate
  totalSales: number = 0;
  averageSales: number = 0;
  maxSales: number = 0;
  minSales: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Calcoliamo le statistiche al caricamento del componente
    this.calculateStatistics();
  }

  // Metodo per calcolare le statistiche
  calculateStatistics(): void {
    this.totalSales = this.salesData.reduce((acc, curr) => acc + curr, 0);
    this.averageSales = this.totalSales / this.salesData.length;
    this.maxSales = Math.max(...this.salesData);
    this.minSales = Math.min(...this.salesData);
  }
}
