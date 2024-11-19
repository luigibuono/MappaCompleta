import { createAction, props } from '@ngrx/store';

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
