

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
        this._pokemonService.getPokemons()
            .subscribe((pokemon: Pokemon[]) => {
                console.log(pokemon);
                this.pokemon = pokemon;
            }, error => this.errorMessage = error);
    }
    deletePokemon(pokemon: Pokemon) {
        this._pokemonService.deletePokemon(pokemon)
                .subscribe(() => {},
                                error => this.errorMessage = error,
                        () => {
            // this.getPokemons();
            this.deletePokemonFromList(pokemon);
        });
    }
    deletePokemonFromList(pokemon: Pokemon) {
        let index = this.pokemon.indexOf(pokemon, 0);
        if(index > -1) {
            this.pokemon.splice(index, 1);
        }
    }
}