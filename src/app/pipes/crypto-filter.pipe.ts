import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../interfaces/coin.interface';

@Pipe({
  name: 'cryptoFilter'
})
export class CryptoFilterPipe implements PipeTransform {
  transform(items: Coin[], searchText: string): Coin[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return (
        item.id.toLowerCase().includes(searchText) ||
        item.name.toLowerCase().includes(searchText) ||
        item.symbol.toLowerCase().includes(searchText)
      );
    });
  }
}
