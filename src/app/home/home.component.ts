import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../produits.service';
import { Produit } from '../produit.model';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SortByPricePipe, FilterByNamePipe, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Produit[] = [];
  errorMessage = '';
  sortOrder: 'asc' | 'desc' | null = 'asc';
  searchTerm: string = '';

  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productsService.getProduits();
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
      this.errorMessage = 'Impossible de charger les produits.';
    }
  }

  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
} 
