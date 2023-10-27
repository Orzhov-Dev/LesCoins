import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { Coin } from '../interfaces/coin.interface';
import { CryptoFilterPipe } from '../pipes/crypto-filter.pipe';


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
  providers: [CryptoFilterPipe]
})
export class CoinsComponent implements OnInit {
  
  constructor(private coinService: CoinService) { }
  coins: Coin[] = []; // Déclarez la propriété coins de type Coin
  coinParent: Coin | undefined;
  searchText: string = '';

  ngOnInit() {
    this.getCoins();
    
  }
  
  getCoins() {
    this.coinService.fetchAllCoins().subscribe((data: any) => {
      this.coins = data.data;
      return this.coins
    });
  }

  // not used
  // getCoins() {
  //   this.coinService.getCoins().subscribe((data: any) => {
  //     this.coins = data.data;
  //     return this.coins
  //   });
  // }
  
  selectCoin(choosenCoin:Coin) {
    console.log(choosenCoin);
    this.coinParent=choosenCoin;
  }
  
}
