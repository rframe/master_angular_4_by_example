import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {PokemonService} from "../shared/pokemon.service";
import {Pokemon} from "../shared/pokemon";
import {PokemonModalComponent} from './pokemon-modal.component';

@Component({
    selector: 'pk-list',
    moduleId: 'ListPokemonComponent',
    templateUrl: '/app/poke-list/list-pokemon.template.html',
    styles: [`
            :host >>> .tooltip-inner {
                background-color: #FF7768;
                color: #fff;
            }
            :host >>> .tooltip-inner::before{
                border-right-color: #FF7768!important;
            }
            :host >>> .tooltip-arrow {
                border-bottom-color: #FF7768;
            }
    `]
})

export class ListPokemonComponent implements OnInit {
    @ViewChild('childModal') public childModal: PokemonModalComponent;
    public pokemon: Pokemon[];
    public errorMessage: string;

    // Modal Properties
    pokeDetails: Pokemon
    constructor(private _pokemonService: PokemonService, private _viewContainerRef: ViewContainerRef) {}

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

    viewSinglePokemon(id: number) {
        this._pokemonService.getPokemonDetails(id)
            .subscribe((pokemon: Pokemon) => {
                this.pokeDetails = pokemon;
                this.childModal.show();
            },
                error => this.errorMessage = error,
            );
    }
}