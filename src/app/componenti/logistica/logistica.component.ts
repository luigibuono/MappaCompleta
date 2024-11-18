import { Component } from '@angular/core';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.component.html',
  styleUrls: ['./logistica.component.css']
})
export class LogisticaComponent {
  inventory = [
    { id: 1, product: 'Prodotto A', quantity: 50 },
    { id: 2, product: 'Prodotto B', quantity: 30 },
    { id: 3, product: 'Prodotto C', quantity: 70 }
  ];

  shipments = [
    { id: 1, product: 'Prodotto A', status: 'In transito', location: 'Magazzino 1' },
    { id: 2, product: 'Prodotto B', status: 'Consegnato', location: 'Magazzino 2' }
  ];

  deliveryRoutes = [
    { routeId: 1, deliveryTime: 45, distance: 100, optimalRoute: 'Percorso A' },
    { routeId: 2, deliveryTime: 60, distance: 150, optimalRoute: 'Percorso B' }
  ];

  reconciliations = [
    { orderId: 1, invoiceMatched: true, receiptMatched: false },
    { orderId: 2, invoiceMatched: true, receiptMatched: true }
  ];

  warehouse = [
    { barcode: '123456', product: 'Prodotto A', quantity: 50 },
    { barcode: '234567', product: 'Prodotto B', quantity: 30 }
  ];

  kpiReport = {
    deliveryTime: 45, // average delivery time in minutes
    inventoryAccuracy: 95, // percentage of accurate stock
    onTimeDeliveryRate: 90 // percentage of on-time deliveries
  };

  // Gestione degli Inventari e Riordino Automatico
  reorderStock() {
    this.inventory.forEach(item => {
      if (item.quantity < 40) {
        alert(`Riordino necessario per ${item.product}. Quantità rimanente: ${item.quantity}`);
      }
    });
  }

  // Monitoraggio in Tempo Reale delle Spedizioni
  trackShipment(shipmentId: number) {
    const shipment = this.shipments.find(s => s.id === shipmentId);
    alert(`Spedizione ID ${shipmentId}: Status - ${shipment?.status}, Posizione - ${shipment?.location}`);
  }

  // Ottimizzazione delle Rotte di Consegna
  optimizeDeliveryRoutes() {
    const optimalRoute = this.deliveryRoutes.sort((a, b) => a.deliveryTime - b.deliveryTime)[0];
    alert(`Percorso ottimale per la consegna: ${optimalRoute.optimalRoute}, Tempo stimato: ${optimalRoute.deliveryTime} min`);
  }

  // Sistema di Riconciliazione Automatizzata
  performReconciliation() {
    this.reconciliations.forEach(reconciliation => {
      if (reconciliation.invoiceMatched && reconciliation.receiptMatched) {
        alert(`Ordine ID ${reconciliation.orderId} - Riconciliazione completata con successo`);
      } else {
        alert(`Ordine ID ${reconciliation.orderId} - Riconciliazione non riuscita`);
      }
    });
  }

  // Gestione del Magazzino con RFID e Barcode
  scanBarcode(barcode: string) {
    const product = this.warehouse.find(item => item.barcode === barcode);
    if (product) {
      alert(`Prodotto trovato: ${product.product}, Quantità: ${product.quantity}`);
    } else {
      alert('Prodotto non trovato nel magazzino');
    }
  }

  // Sistema di Reportistica KPI Logistici
  generateKpiReport() {
    alert(`Report KPI Logistici: \nTempo medio di consegna: ${this.kpiReport.deliveryTime} min\nPrecisione scorte: ${this.kpiReport.inventoryAccuracy}%\nTasso di consegna puntuale: ${this.kpiReport.onTimeDeliveryRate}%`);
  }
}