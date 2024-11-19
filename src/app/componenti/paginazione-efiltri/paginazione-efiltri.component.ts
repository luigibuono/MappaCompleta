import { Component } from '@angular/core';

@Component({
  selector: 'app-paginazione-efiltri',
  templateUrl: './paginazione-efiltri.component.html',
  styleUrls: ['./paginazione-efiltri.component.css']
})
export class PaginazioneEfiltriComponent {
 // Dati simulati (es. utenti)
 data = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
  { id: 6, name: 'David Wilson', email: 'david.wilson@example.com' },
  { id: 7, name: 'Eva Miller', email: 'eva.miller@example.com' },
  { id: 8, name: 'Frank Moore', email: 'frank.moore@example.com' },
  { id: 9, name: 'Grace Lee', email: 'grace.lee@example.com' },
  { id: 10, name: 'Hank Taylor', email: 'hank.taylor@example.com' }
];

// Parametri di paginazione
currentPage = 1;
itemsPerPage = 3; // Mostra 3 elementi per pagina

// Filtraggio
searchQuery: string = '';
filteredData = [...this.data]; // Dati filtrati

// Metodo per filtrare i dati
filterData() {
  if (this.searchQuery) {
    this.filteredData = this.data.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } else {
    this.filteredData = [...this.data];
  }
  this.currentPage = 1; // Reset della pagina corrente quando il filtro cambia
  this.updatePagination();
}

// Funzione per ottenere i dati della pagina corrente
get currentPageData() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.filteredData.slice(startIndex, endIndex);
}

// Totale delle pagine
get totalPages() {
  return Math.ceil(this.filteredData.length / this.itemsPerPage);
}

// Funzione per navigare tra le pagine
goToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}

// Funzione per aggiornare la paginazione quando cambiano i dati filtrati
updatePagination() {
  this.currentPage = 1;
}
}