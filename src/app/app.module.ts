import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FullCardPageComponent } from './full-card-page/full-card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    SearchComponent,
    CardsPageComponent,
    FirstPageComponent,
    FullCardPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
