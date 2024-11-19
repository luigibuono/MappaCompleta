import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-spring-security',
  templateUrl: './spring-security.component.html',
  styleUrls: ['./spring-security.component.css']
})
export class SpringSecurityComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router) {}

  // Metodo di login
  login(): void {
    this.authService.login(this.username, this.password).subscribe((success) => {
      if (success) {
        this.router.navigate(['/dashboard']); // Reindirizza alla dashboard se il login è riuscito
      } else {
        this.loginFailed = true; // Mostra errore se il login fallisce
      }
    });
  }
}