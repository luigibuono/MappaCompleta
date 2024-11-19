import { createReducer, on } from '@ngrx/store';
import { addItem, editItem, deleteItem } from './actions';

// Definizione dello stato iniziale
export interface Item {
  id: number;
  name: string;
}

export interface AppState {
  items: Item[];
}

export const initialState: AppState = {
  items: []
};

// Definizione del reducer per aggiornare lo stato in base alle azioni
export const itemsReducer = createReducer(
  initialState,
  on(addItem, (state, { name }) => ({
    ...state,
    items: [...state.items, { id: Date.now(), name }]
  })),
  on(editItem, (state, { id, name }) => ({
    ...state,
    items: state.items.map(item => 
      item.id === id ? { ...item, name } : item
    )
  })),
  on(deleteItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  }))
);
