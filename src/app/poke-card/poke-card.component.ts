import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() id: string = "";
  @Input() name: string = "";
  @Input() types: any[] = [];

  img: string = ""
  hidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  image(): string{
    if(Number(this.id) >= 650) {
      this.img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + this.id + '.png';
    } else {
      this.img= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + this.id + '.gif';
    };
    return this.img;
  }
  
  hide(){
    this.hidden = !this.hidden;
  }

}
