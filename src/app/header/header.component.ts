import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isHomeRouteActive(): boolean {
    return this.router.isActive('', true); // Vérifie si la route actuelle correspond à la page "Home"
  }

  isCoinsRouteActive(): boolean {
    return this.router.isActive('/coins', true); // Vérifie si la route actuelle correspond à la page des cryptomonnaies
  }

  redirectToCoins(): void {
    this.router.navigate(['/coins']); // Redirection vers la page des cryptomonnaies
  }
}