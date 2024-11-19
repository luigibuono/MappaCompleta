import { Component } from '@angular/core';

@Component({
  selector: 'app-gestione-ordini',
  templateUrl: './gestione-ordini.component.html',
  styleUrls: ['./gestione-ordini.component.css']
})
export class GestioneOrdiniComponent {
  orders = [
    { id: 1, product: 'T-shirt', quantity: 2, status: 'in-progress' },
    { id: 2, product: 'Jeans', quantity: 1, status: 'completed' },
    { id: 3, product: 'Sneakers', quantity: 3, status: 'in-progress' },
    { id: 4, product: 'Hoodie', quantity: 1, status: 'canceled' },
    { id: 5, product: 'Jacket', quantity: 1, status: 'completed' },
    { id: 6, product: 'Cap', quantity: 5, status: 'in-progress' }
  ];

  statusFilter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 2;

  // Filtra gli ordini in base allo stato
  filteredOrders() {
    let filtered = this.orders;

    if (this.statusFilter) {
      filtered = this.orders.filter(order => order.status === this.statusFilter);
    }

    return filtered.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  // Aggiungi un nuovo ordine
  addOrder() {
    const newOrder = {
      id: this.orders.length + 1,
      product: 'New Product',
      quantity: 1,
      status: 'in-progress'
    };
    this.orders.push(newOrder);
  }

  // Cambia stato dell'ordine
  updateOrderStatus(orderId: number) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = order.status === 'in-progress' ? 'completed' : 'in-progress';
    }
  }

  // Rimuovi ordine
  deleteOrder(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  }

  // Gestione della paginazione
  totalPages() {
    return Math.ceil(this.orders.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}