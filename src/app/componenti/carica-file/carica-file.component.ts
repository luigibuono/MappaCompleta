import { Component } from '@angular/core';

@Component({
  selector: 'app-carica-file',
  templateUrl: './carica-file.component.html',
  styleUrls: ['./carica-file.component.css']
})
export class CaricaFileComponent {
  selectedFiles: FileList | null = null; // File selezionati
  uploadedFiles: any[] = []; // Lista di file caricati con anteprima

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = input.files;
      console.log('File selezionati:', input.files);
    }
  }
  

  uploadFiles(): void {
    if (this.selectedFiles) {
      Array.from(this.selectedFiles).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log('Caricato:', file.name); // Log per debugging
          this.uploadedFiles.push({
            name: file.name,
            size: file.size,
            type: file.type,
            previewUrl: e.target.result,
          });
        };
        reader.readAsDataURL(file); // Legge il file per anteprima
      });
      this.selectedFiles = null; // Resetta la selezione
    } else {
      console.log('Nessun file selezionato.');
    }
  }
  

  // Rimozione file
  removeFile(file: any): void {
    this.uploadedFiles = this.uploadedFiles.filter((f) => f !== file);
  }

  // Verifica se il file è un'immagine
  isImage(file: any): boolean {
    return file.type.startsWith('image/');
  }

  openFile(file: any): void {
    if (this.isImage(file)) {
      // Per immagini, usa l'anteprima Base64
      const newWindow = window.open(file.previewUrl, '_blank');
      if (!newWindow) {
        alert('Impossibile aprire il file. Controlla il blocco popup del browser.');
      }
    } else if (file.type === 'application/pdf') {
      // Per file PDF, crea un Blob URL
      const byteCharacters = atob(file.previewUrl.split(',')[1]); // Decodifica Base64
      const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: file.type });
      const url = window.URL.createObjectURL(blob);
  
      // Apri il PDF con l'URL temporaneo
      const newWindow = window.open(url, '_blank');
      if (!newWindow) {
        alert('Impossibile aprire il file. Controlla il blocco popup del browser.');
      }
  
      // Rilascia l'URL dopo l'uso per evitare memory leaks
      newWindow?.addEventListener('unload', () => window.URL.revokeObjectURL(url));
    } else {
      // Per altri tipi di file
      alert('Questo tipo di file non è supportato per l\'apertura.');
    }
  }
  
  
}

