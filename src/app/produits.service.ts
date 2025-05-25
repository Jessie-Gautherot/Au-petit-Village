import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './produit.model';
import { firstValueFrom } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private dataUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProduits(): Promise<Produit[]> {
    return firstValueFrom(this.http.get<Produit[]>(this.dataUrl));
  }
}
