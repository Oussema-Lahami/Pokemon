import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-full-card-page',
  templateUrl: './full-card-page.component.html',
  styleUrls: ['./full-card-page.component.scss']
})
export class FullCardPageComponent implements OnInit {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  id: number = 25;
  stats = [{base_stat:""}];
  abilities = [{ability:{name:""}}];
  weight = {} ;
  height = {} ;
  types = [{type: {name : ""}}] ;
  image: string = "";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPokemonstats(this.id).subscribe(poke => {
      this.stats = poke.stats
      this.abilities = poke.abilities
      this.height = poke.height
      this.weight = poke.weight
      this.types = poke.types
      this.image = poke.sprites.front_default
      console.log(this.types)
    });
  }

  getPokemonstats(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}`)
  }

}
