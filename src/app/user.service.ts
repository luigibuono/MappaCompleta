import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);

  // Observable che emette la lista degli utenti
  users$: Observable<User[]> = this.usersSubject.asObservable();

  // Metodo per aggiungere un nuovo utente
  addUser(user: User): Observable<void> {
    const users = [...this.usersSubject.value, user];
    this.usersSubject.next(users);
    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }

  // Metodo per aggiornare un utente esistente
  updateUser(updatedUser: User): Observable<void> {
    const users = this.usersSubject.value.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.usersSubject.next(users);
    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }

  // Metodo per eliminare un utente
  deleteUser(userId: number): Observable<void> {
    const users = this.usersSubject.value.filter(user => user.id !== userId);
    this.usersSubject.next(users);
    return new Observable<void>(observer => {
      observer.next();
      observer.complete();
    });
  }
}
