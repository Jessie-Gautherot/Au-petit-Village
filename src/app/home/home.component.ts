import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../produits.service';
import { Produit } from '../produit.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Produit[] = [];
  errorMessage = '';

  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productsService.getProduits();
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
      this.errorMessage = 'Impossible de charger les produits.';
    }
  }
}
