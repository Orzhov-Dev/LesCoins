import { Component, Input } from '@angular/core';
import { Coin } from '../interfaces/coin.interface'; // Importer l'interface Coin

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {

  @Input() coinsEnfant: Coin | undefined; // Définir la propriété d'entrée pour les détails de la crypto-monnaie

}
