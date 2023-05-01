import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=50`).pipe(
      map((response: any) => {
        const pokemons = [];
        for (let i = 0; i < 50; i++) {
          pokemons.push({
            name: response.results[i].name,
            id: i + 1
          });
        }
        return pokemons;
      })
    );
  }
}
