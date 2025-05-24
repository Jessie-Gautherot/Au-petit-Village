import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './produit.model';
import { firstValueFrom } from 'rxjs'; 
// Transforme un Observable (renvoyé par HttpClient) en une Promise, 
// pour un usage plus classique de type async/await.

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private dataUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) {}
  // le service HttpClient pour effectuer des requêtes HTTP, une requête get

  getProduits(): Promise<Produit[]> {
    return firstValueFrom(this.http.get<Produit[]>(this.dataUrl));
    // Méthode getProduits() envoie une requête GET vers le fichier products.json, attend un tableau de Produit (Produit[]).
  //  Utilise firstValueFrom pour convertir l’Observable(flu de doné facil à mapipulé) en Promise.
  // et Retourne cette Promise de tableau
  }
}
