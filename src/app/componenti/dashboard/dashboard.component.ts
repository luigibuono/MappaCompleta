import { Component } from '@angular/core';
import {AuthServiceService } from '../../auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthServiceService) {}

  // Controlla se l'utente ha il permesso di visualizzare la dashboard
  hasAdminPermission(): boolean {
    return this.authService.hasPermission('admin');
  }

  logout(): void {
    this.authService.logout();
  }
}
