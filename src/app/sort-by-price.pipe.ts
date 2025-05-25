import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './produit.model';

@Pipe({
  name: 'sortByPrice',
  standalone: true,
})
export class SortByPricePipe implements PipeTransform {
  transform(products: Produit[], order: 'asc' | 'desc' | null): Produit[] {
    if (!products) return [];
    if (!order) return products;

    return [...products].sort((a, b) => {
      if (order === 'asc') {
        if (a.prix < b.prix) return -1;
        if (a.prix > b.prix) return 1;
        return 0;
      } else {
        if (a.prix > b.prix) return -1;
        if (a.prix < b.prix) return 1;
        return 0;
      }
    });
  }
}
