import { Component } from '@angular/core';

interface Vehicle {
  id: number;
  model: string;
  mileage: number;
  fuelConsumption: number;
  lastMaintenanceDate: Date;
  nextMaintenanceDate: Date;
  diagnosticStatus: string;
}

@Component({
  selector: 'app-automotive',
  templateUrl: './automotive.component.html',
  styleUrls: ['./automotive.component.css']
})
export class AutomotiveComponent {

  vehicles: Vehicle[] = [];
  newVehicle: Vehicle = {
    id: 0,
    model: '',
    mileage: 0,
    fuelConsumption: 0,
    lastMaintenanceDate: new Date(),
    nextMaintenanceDate: new Date(),
    diagnosticStatus: 'good',
  };

  constructor() { }

  ngOnInit(): void {
    this.loadVehicles();  // Carica i veicoli iniziali
  }

  // Caricamento iniziale dei veicoli (simulato)
  loadVehicles() {
    this.vehicles = [
      {
        id: 1,
        model: 'Fiat Panda',
        mileage: 50000,
        fuelConsumption: 5.5,
        lastMaintenanceDate: new Date('2023-05-01'),
        nextMaintenanceDate: new Date('2023-11-01'),
        diagnosticStatus: 'good'
      },
      {
        id: 2,
        model: 'BMW X5',
        mileage: 120000,
        fuelConsumption: 8.0,
        lastMaintenanceDate: new Date('2023-03-15'),
        nextMaintenanceDate: new Date('2023-09-15'),
        diagnosticStatus: 'warning'
      }
    ];
  }

  // Aggiungi un nuovo veicolo
  addVehicle() {
    this.newVehicle.id = this.vehicles.length + 1; // Simulazione ID
    this.vehicles.push({ ...this.newVehicle });
    this.resetNewVehicle();
  }

  // Funzione di reset per i veicoli
  resetNewVehicle() {
    this.newVehicle = {
      id: 0,
      model: '',
      mileage: 0,
      fuelConsumption: 0,
      lastMaintenanceDate: new Date(),
      nextMaintenanceDate: new Date(),
      diagnosticStatus: 'good',
    };
  }

  // Gestione manutenzione programmata
  scheduleMaintenance(id: number) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
      vehicle.nextMaintenanceDate = new Date(new Date().setMonth(new Date().getMonth() + 6)); // Manutenzione ogni 6 mesi
      alert(`Manutenzione programmata per il veicolo ${vehicle.model} fissata per: ${vehicle.nextMaintenanceDate}`);
    }
  }

  // Diagnostica del veicolo (controllo del malfunzionamento)
  diagnoseVehicle(id: number) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
      // Simulazione diagnostica
      vehicle.diagnosticStatus = vehicle.mileage > 100000 ? 'warning' : 'good';
      alert(`Stato diagnostico per il veicolo ${vehicle.model}: ${vehicle.diagnosticStatus}`);
    }
  }

  // Simulazione costi di proprietà
  calculateOwnershipCosts(id: number): number {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
      const cost = (vehicle.mileage * 0.10) + (vehicle.fuelConsumption * 2) + 1000; // Calcolo semplificato
      alert(`Il costo di proprietà annuale per ${vehicle.model} è: €${cost}`);
      return cost;
    }
    return 0;
  }

  bookTestDrive(model: string, date: any) {
    // Assicurati che la data venga trattata come un oggetto Date
    const testDriveDate = new Date(date);
  
    // Verifica se la data è valida
    if (isNaN(testDriveDate.getTime())) {
      alert('Data non valida');
      return;
    }
  
    // Mostra il messaggio con la data formattata
    alert(`Test drive per il modello ${model} prenotato per il ${testDriveDate.toLocaleDateString()}`);
  }
  

  // Analisi risparmio carburante
  analyzeFuelSavings(id: number) {
    const vehicle = this.vehicles.find(v => v.id === id);
    if (vehicle) {
      const savings = vehicle.fuelConsumption < 6 ? 'Ottimale' : 'Può essere migliorato';
      alert(`Analisi risparmio carburante per ${vehicle.model}: ${savings}`);
    }
  }
}
