import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      return new Observable<boolean>((observer) => {
        observer.next(true); // Permetti l'accesso se l'utente è autenticato
        observer.complete();
      });
    } else {
      this.router.navigate(['/login']); // Se non autenticato, reindirizza al login
      return new Observable<boolean>((observer) => {
        observer.next(false); // Negato l'accesso
        observer.complete();
      });
    }
  }
}
