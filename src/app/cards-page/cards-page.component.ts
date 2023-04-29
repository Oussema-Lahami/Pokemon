import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';


@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {
  
  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(poke => {
      this.pokemons = poke
    });
  }

}
