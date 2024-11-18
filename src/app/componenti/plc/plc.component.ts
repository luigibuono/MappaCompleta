import { Component } from '@angular/core';

@Component({
  selector: 'app-plc',
  templateUrl: './plc.component.html',
  styleUrls: ['./plc.component.css']
})
export class PlcComponent {
  productionMetrics = {
    output: 0,
    quality: 100,
    performance: 95
  };

  predictiveMaintenance = {
    malfunctionDetected: false,
    nextMaintenance: '2024-12-01'
  };

  batchManagement = {
    batchId: '',
    qualityControl: 'Passed'
  };

  assemblyLineOptimization = {
    bottlenecks: 2,
    optimizationSuggestions: ['Increase speed of machine 3', 'Add another worker at station 2']
  };

  environmentalConditions = {
    temperature: 22,  // in Celsius
    humidity: 50  // in percentage
  };

  digitalTwinSimulation = {
    productionStatus: 'In Progress',
    simulationOutcome: 'All tests passed'
  };

  // Monitoraggio della produzione in tempo reale
  monitorProduction() {
    this.productionMetrics.output = Math.floor(Math.random() * 100); // Simulazione di produzione
    this.productionMetrics.quality = Math.floor(Math.random() * 100); // Simulazione di qualità
    this.productionMetrics.performance = Math.floor(Math.random() * 100); // Simulazione di prestazioni
    alert(`Produzione monitorata. Output: ${this.productionMetrics.output}, Qualità: ${this.productionMetrics.quality}, Prestazioni: ${this.productionMetrics.performance}`);
  }

  // Controllo e manutenzione predittiva
  performMaintenanceCheck() {
    this.predictiveMaintenance.malfunctionDetected = Math.random() < 0.1; // 10% probabilità di guasto
    this.predictiveMaintenance.nextMaintenance = '2024-12-01'; // Esempio di manutenzione pianificata
    alert(this.predictiveMaintenance.malfunctionDetected ? 'Guasto rilevato! Pianificazione manutenzione imminente.' : 'Nessun guasto rilevato.');
  }

  // Gestione dei lotti di produzione
  manageBatch() {
    this.batchManagement.batchId = 'Batch' + Math.floor(Math.random() * 1000);
    this.batchManagement.qualityControl = Math.random() > 0.2 ? 'Passed' : 'Failed'; // Simulazione del controllo qualità
    alert(`Lotto ${this.batchManagement.batchId} - Controllo qualità: ${this.batchManagement.qualityControl}`);
  }

  // Ottimizzazione della catena di montaggio
  optimizeAssemblyLine() {
    alert(`Ottimizzazione catena di montaggio: ${this.assemblyLineOptimization.optimizationSuggestions.join(', ')}`);
  }

  // Monitoraggio della temperatura e umidità
  monitorEnvironmentalConditions() {
    this.environmentalConditions.temperature = 22 + Math.floor(Math.random() * 5); // Simulazione di temperatura
    this.environmentalConditions.humidity = 50 + Math.floor(Math.random() * 20); // Simulazione di umidità
    alert(`Condizioni ambientali - Temperatura: ${this.environmentalConditions.temperature}°C, Umidità: ${this.environmentalConditions.humidity}%`);
  }

  // Simulazione di produzione virtuale (Digital Twin)
  simulateDigitalTwin() {
    this.digitalTwinSimulation.productionStatus = 'In Progress';
    this.digitalTwinSimulation.simulationOutcome = Math.random() > 0.2 ? 'All tests passed' : 'Issues detected';
    alert(`Simulazione produzione virtuale: ${this.digitalTwinSimulation.simulationOutcome}`);
  }
}