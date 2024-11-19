import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-metodi-crud',
  templateUrl: './metodi-crud.component.html',
  styleUrls: ['./metodi-crud.component.css']
})
export class MetodiCrudComponent {
  title = 'Gestione Utenti CRUD con RxJS';

  // Variabili per il form
  newUser: User = { id: 0, name: '', email: '' };
  selectedUser: User | null = null;

  // Lista degli utenti
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Sottoscriviamo all'Observable per ottenere la lista degli utenti
    this.userService.users$.subscribe(users => {
      this.users = users;
    });
  }

  // Aggiungi un nuovo utente
  addUser() {
    if (this.newUser.name && this.newUser.email) {
      const newId = this.users.length ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
      const user: User = { ...this.newUser, id: newId };
      this.userService.addUser(user).subscribe(() => {
        this.resetForm();
      });
    } else {
      alert('Nome ed email sono obbligatori');
    }
  }

  // Modifica un utente
  editUser(user: User) {
    this.selectedUser = { ...user }; // Copia i dati dell'utente
  }

  updateUser() {
    if (this.selectedUser) {
      this.userService.updateUser(this.selectedUser).subscribe(() => {
        this.selectedUser = null;
      });
    }
  }

  // Elimina un utente
  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe();
  }

  // Reset del form
  resetForm() {
    this.newUser = { id: 0, name: '', email: '' };
  }
}