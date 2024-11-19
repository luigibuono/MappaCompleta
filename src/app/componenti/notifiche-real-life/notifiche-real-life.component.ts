import { Component } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-notifiche-real-life',
  templateUrl: './notifiche-real-life.component.html',
  styleUrls: ['./notifiche-real-life.component.css']
})
export class NotificheRealLifeComponent {
  notifications: any[] = []; // Array per le notifiche
  private stopSubject = new Subject<void>(); // Subject per fermare la simulazione delle notifiche in tempo reale

  ngOnInit() {
    // Simula l'emissione di notifiche ogni 5 secondi
    interval(5000)
      .pipe(takeUntil(this.stopSubject))
      .subscribe(() => {
        this.addNotification();
      });
  }

  // Aggiungi una nuova notifica
  addNotification() {
    const notification = {
      message: `Nuova notifica arrivata alle ${new Date().toLocaleTimeString()}`,
      timestamp: new Date()
    };
    this.notifications.push(notification);
  }

  // Simula una notifica manualmente
  simulateNotification() {
    this.addNotification();
  }

  // Disattiva la simulazione quando il componente viene distrutto
  ngOnDestroy() {
    this.stopSubject.next();
    this.stopSubject.complete();
  }
}