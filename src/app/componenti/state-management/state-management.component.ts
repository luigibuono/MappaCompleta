import { Component } from '@angular/core';

import { createAction, props, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllItems } from '../selectors';

// Definire le actions per aggiungere, modificare e rimuovere elementi
export const addItem = createAction(
  '[Items] Add Item',
  props<{ name: string }>()
);

export const editItem = createAction(
  '[Items] Edit Item',
  props<{ id: number, name: string }>()
);

export const deleteItem = createAction(
  '[Items] Delete Item',
  props<{ id: number }>()
);

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})
export class StateManagementComponent {
 // Observable che contiene gli items dallo stato
 items$: Observable<any[]> = this.store.select(selectAllItems);

 // Variabili per gestire il form e l'editing
 newItemName: string = '';
 itemToEdit: any = null;
 editedItemName: string = '';

 constructor(private store: Store) {}

 ngOnInit(): void {}

 addItem() {
   if (this.newItemName.trim()) {
     this.store.dispatch(addItem({ name: this.newItemName }));
     this.newItemName = ''; // Reset del campo input
   }
 }

 startEditing(item: any) {
   this.itemToEdit = item;
   this.editedItemName = item.name;
 }

 saveEditedItem() {
   if (this.editedItemName.trim()) {
     this.store.dispatch(editItem({ id: this.itemToEdit.id, name: this.editedItemName }));
     this.itemToEdit = null; // Resetta la modalità di editing
     this.editedItemName = ''; // Resetta il campo di editing
   }
 }

 cancelEditing() {
   this.itemToEdit = null;
   this.editedItemName = '';
 }

 deleteItem(item: any) {
   this.store.dispatch(deleteItem({ id: item.id }));
 }
}
