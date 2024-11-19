import { Component } from '@angular/core';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.css']
})
export class MachineLearningComponent {

  // Dataset di esempio
  data: { x: number, y: number }[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 }
  ];

  // Coefficienti della regressione
  slope: number = 0;
  intercept: number = 0;

  // Input e output per fare previsioni
  inputValue: number = 0;
  prediction: number | null = null;

  constructor() { }

  ngOnInit(): void {
    // Calcola la regressione lineare
    this.calculateLinearRegression();
  }

  // Metodo per calcolare la regressione lineare
  calculateLinearRegression(): void {
    const n = this.data.length;
    const sumX = this.data.reduce((acc, point) => acc + point.x, 0);
    const sumY = this.data.reduce((acc, point) => acc + point.y, 0);
    const sumXY = this.data.reduce((acc, point) => acc + point.x * point.y, 0);
    const sumXX = this.data.reduce((acc, point) => acc + point.x * point.x, 0);

    // Formula per la pendenza e l'intercetta
    this.slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    this.intercept = (sumY - this.slope * sumX) / n;
  }

  // Metodo per fare previsioni
  predict(): void {
    this.prediction = this.slope * this.inputValue + this.intercept;
  }
}