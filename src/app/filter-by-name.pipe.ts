import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './produit.model';

@Pipe({
  name: 'filterByName',
  standalone: true,
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Produit[], searchTerm: string): Produit[] {
    if (!products || !searchTerm) return products;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return products.filter(product =>
      product.nom.toLowerCase().includes(lowerSearchTerm)
    );
  }
}
