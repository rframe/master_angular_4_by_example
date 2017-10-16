import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import {PokemonService} from "./shared/pokemon.service";
import {AddPokemonComponent} from "./poke-add/add-pokemon.component";
import {ListPokemonComponent} from "./poke-list/list-pokemon.component";
import './shared/rxjs-extensions';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {PokemonData} from './shared/pokemon-data';
import {ModalModule, TooltipModule} from 'ng2-bootstrap';
import {PokemonModalComponent} from './poke-list/pokemon-modal.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(PokemonData),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        AddPokemonComponent,
        ListPokemonComponent,
        PokemonModalComponent,
  ],
  providers: [ PokemonService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }