// coin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coin, CoinsData } from '../interfaces/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private apiURL = 'https://api.coincap.io/v2/assets';

  constructor(private http: HttpClient) { }

  fetchAllCoins() {
    return this.http.get<Coin[]>(this.apiURL);
  }

  getCoins(): Observable<CoinsData> {
    return this.http.get<any>(this.apiURL).pipe(
      map((data) => data as CoinsData)
    );
  }
  
}
