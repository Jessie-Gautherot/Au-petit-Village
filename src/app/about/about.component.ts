import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../produits.service';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nombreProduits: number = 0;

  constructor(private productsService: ProductsService) {
    this.productsService.getProduits().then((produits: Produit[]) => {
      this.nombreProduits = produits.length;
    }).catch(error => {
      console.error('Erreur lors du chargement des produits', error);
    });
  }
}

