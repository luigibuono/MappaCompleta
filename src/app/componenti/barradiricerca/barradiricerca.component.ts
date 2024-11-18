import { Component } from '@angular/core';

@Component({
  selector: 'app-barradiricerca',
  templateUrl: './barradiricerca.component.html',
  styleUrls: ['./barradiricerca.component.css']
})
export class BarradiricercaComponent {
  items: string[] = ['Angular', 'React', 'Vue', 'Svelte', 'Ember', 'Backbone'];
  searchTerm: string = '';
  searchRes:string[] = [];
  searchAtt:boolean = false;

  onSubmit(){
    this.searchRes= this.items.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Imposta a true searchAttempted per mostrare il messaggio se non ci sono risultati
    this.searchAtt = true;
  }
}
