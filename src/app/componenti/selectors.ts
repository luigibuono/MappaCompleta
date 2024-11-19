import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

// Selettore per ottenere l'intero stato degli elementi
export const selectItems = createFeatureSelector<AppState>('appState');

// Selettore per ottenere solo la lista degli items
export const selectAllItems = createSelector(selectItems, (state) => state.items);
