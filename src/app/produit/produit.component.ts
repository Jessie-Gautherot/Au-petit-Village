import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../produits.service';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProductComponent implements OnInit {
  produit?: Produit;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (!idParam) {
        this.errorMessage = 'Aucun ID de produit spécifié.';
        return;
      }

      const id = +idParam; // Convertit en nombre
      const produits = await this.productsService.getProduits();
      this.produit = produits.find(p => p.id === id);

      if (!this.produit) {
        this.errorMessage = 'Produit non trouvé.';
      }
    } catch (error) {
      console.error('Erreur lors du chargement du produit:', error);
      this.errorMessage = 'Impossible de charger le produit.';
    }
  }
}

