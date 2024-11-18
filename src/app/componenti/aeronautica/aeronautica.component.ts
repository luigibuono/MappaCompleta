import { Component } from '@angular/core';

@Component({
  selector: 'app-aeronautica',
  templateUrl: './aeronautica.component.html',
  styleUrls: ['./aeronautica.component.css']
})
export class AeronauticaComponent {
  flightPlan = {
    departure: '',
    arrival: '',
    delay: 0,
    optimalRoute: ''
  };
  aircraftLoad = {
    totalWeight: 0,
    balance: 0
  };
  maintenanceSchedule = {
    date: '',
    operation: ''
  };
  seatReservation = {
    preferredSeats: 0,
    premiumSeats: 0
  };
  fuelConsumption = {
    distance: 0,
    consumption: 0
  };
  baggageManagement = {
    totalBaggage: 0,
    lostBaggage: 0
  };

  // Simulazione della pianificazione del volo
  planFlight() {
    this.flightPlan.optimalRoute = 'Route optimized based on weather and air traffic';
    alert(`Flight planned from ${this.flightPlan.departure} to ${this.flightPlan.arrival}.`);
  }

  // Simulatore di carico e bilanciamento
  simulateLoad() {
    this.aircraftLoad.balance = this.aircraftLoad.totalWeight / 1000; // semplice esempio di calcolo
    alert(`Aircraft loaded with balance of ${this.aircraftLoad.balance}`);
  }

  // Pianificazione della manutenzione
  scheduleMaintenance() {
    alert(`Maintenance scheduled for ${this.maintenanceSchedule.date} - Operation: ${this.maintenanceSchedule.operation}`);
  }

  // Gestione della prenotazione dei posti
  bookSeats() {
    alert(`Reserved ${this.seatReservation.preferredSeats} preferred seats and ${this.seatReservation.premiumSeats} premium seats.`);
  }

  // Monitoraggio del consumo di carburante
  optimizeFuelConsumption() {
    this.fuelConsumption.consumption = (this.fuelConsumption.distance / 100) * 8; // esempio di calcolo consumo
    alert(`Fuel consumption for ${this.fuelConsumption.distance} km: ${this.fuelConsumption.consumption} liters.`);
  }

  // Gestione del bagaglio
  manageBaggage() {
    alert(`Total baggage: ${this.baggageManagement.totalBaggage} kg. Lost baggage: ${this.baggageManagement.lostBaggage} kg.`);
  }
}