import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  @Output() onData = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  dive(){
    const hide = false ;
    this.onData.emit(hide);
  }

}
