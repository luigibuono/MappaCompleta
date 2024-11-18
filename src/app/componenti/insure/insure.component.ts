import { Component, OnInit } from '@angular/core';

interface Policy {
  id: number;
  customerName: string;
  coverageType: string;
  premiumAmount: number;
  startDate: Date;
  endDate: Date;
  age: number;
  medicalHistory: string;
  previousClaims: number;
}

@Component({
  selector: 'app-insure',
  templateUrl: './insure.component.html',
  styleUrls: ['./insure.component.css']
})

export class InsureComponent implements OnInit{

  policies: Policy[] = [];
  newPolicy: Policy = {
    id: 0,
    customerName: '',
    coverageType: 'basic',
    premiumAmount: 0,
    startDate: new Date(),
    endDate: new Date(),
    age: 30,
    medicalHistory: 'low',
    previousClaims: 0
  };

  ngOnInit(): void {
    // Caricamento iniziale delle polizze (può essere simulato o caricato da un servizio)
    this.loadPolicies();
  }

  // Carica tutte le polizze (simulazione)
  loadPolicies() {
    this.policies = [
      {
        id: 1,
        customerName: 'Mario Rossi',
        coverageType: 'basic',
        premiumAmount: 150,
        startDate: new Date('2023-01-01'),
        endDate: new Date('2024-01-01'),
        age: 40,
        medicalHistory: 'low',
        previousClaims: 0
      },
      {
        id: 2,
        customerName: 'Giuseppe Verdi',
        coverageType: 'full',
        premiumAmount: 200,
        startDate: new Date('2023-03-01'),
        endDate: new Date('2024-03-01'),
        age: 55,
        medicalHistory: 'high',
        previousClaims: 2
      }
    ];
  }

  // Creazione polizza
  createPolicy() {
    this.newPolicy.id = this.policies.length + 1; // Simulazione ID automatico
    this.policies.push({...this.newPolicy});
    this.resetNewPolicy();
  }

  // Calcola il premio assicurativo
  calculatePremium(): number {
    let premium = 100; // Premio base

    if (this.newPolicy.coverageType === 'full') {
      premium += 50;
    }

    if (this.newPolicy.age > 50) {
      premium += 30;
    }

    if (this.newPolicy.medicalHistory === 'high') {
      premium += 40;
    }

    if (this.newPolicy.previousClaims > 2) {
      premium += 20;
    }

    return premium;
  }

  // Funzione per rinnovare una polizza
  renewPolicy(id: number) {
    const policy = this.policies.find(policy => policy.id === id);
    if (policy) {
      policy.endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)); // Rinnovo di un anno
      alert(`Polizza ID ${id} rinnovata con successo!`);
    }
  }

  // Funzione per visualizzare i dettagli di una polizza
  getPolicyDetails(id: number): Policy | undefined {
    return this.policies.find(policy => policy.id === id);
  }

  // Funzione per reset della polizza in corso
  resetNewPolicy() {
    this.newPolicy = {
      id: 0,
      customerName: '',
      coverageType: 'basic',
      premiumAmount: 0,
      startDate: new Date(),
      endDate: new Date(),
      age: 30,
      medicalHistory: 'low',
      previousClaims: 0
    };
  }

  alert(message: string): void {
    window.alert(message);  // Usa la funzione alert globale
  }
}