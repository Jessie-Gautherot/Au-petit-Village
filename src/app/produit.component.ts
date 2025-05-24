import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from './produits.service';
import { Produit } from './produit.model';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    CommonModule // 
  ],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produit: Produit | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    try {
      const produits = await this.productsService.getProduits();
      this.produit = produits.find(p => p.id === id);
      if (!this.produit) {
        this.errorMessage = 'Produit non trouvé.';
      }
    } catch (error) {
      console.error('Erreur de chargement du produit :', error);
      this.errorMessage = 'Erreur lors du chargement.';
    }
  }
}
