

import {Component, OnInit} from "@angular/core";
import {PokemonService} from "../shared/pokemon.service";
import {Pokemon} from "../shared/pokemon";

@Component({
    selector: 'pk-list',
    moduleId: 'ListPokemonComponent',
    templateUrl: '/app/poke-list/list-pokemon.template.html'
})

export class ListPokemonComponent implements OnInit {
    public pokemon: Pokemon[];
    public errorMessage: string;
    constructor(private _pokemonService: PokemonService) {}

    ngOnInit() {
    // Get All Pokemon
        this.getPokemons();
    }
    getPokemons() {

    }
}