import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 // Stato dell'autenticazione (utente loggato / non loggato)
 private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

 private token: string | null = null;

 constructor() {}

 // Simuliamo il login: in una vera applicazione, invieremmo la richiesta a un backend
 login(username: string, password: string): Observable<boolean> {
   // Simulazione del login
   if (username === 'admin' && password === '1') {
     this.token = 'fake-jwt-token'; // Simuliamo un JWT
     this.loggedInSubject.next(true);
     return new Observable<boolean>((observer) => {
       observer.next(true); // Successo
       observer.complete();
     });
   } else {
     return new Observable<boolean>((observer) => {
       observer.next(false); // Login fallito
       observer.complete();
     });
   }
 }

 // Simuliamo la protezione dell'accesso a risorse (solo utenti loggati)
 hasPermission(requiredRole: string): any{
   // Qui si potrebbe fare una logica basata su JWT per verificare i ruoli dell'utente
   return this.token && requiredRole === 'admin'; // Simuliamo che solo gli "admin" possano accedere
 }

 // Metodo di logout
 logout(): void {
   this.token = null;
   this.loggedInSubject.next(false);
 }

 // Simuliamo il controllo se l'utente è loggato
 isAuthenticated(): boolean {
   return this.token !== null;
 }
}