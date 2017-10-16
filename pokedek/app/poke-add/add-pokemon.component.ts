
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {PokemonService} from '../shared/pokemon.service';

@Component({
    moduleId: 'AddPokemonComponent',
    templateUrl: '/app/poke-add/add-pokemon.template.html'
})

export class AddPokemonComponent {
    public formPokemon: any = {};
    public cardTitle: string = "Add Pokemon";
    public errorMessage: string;

    constructor(private _router: Router, private _pokemonService: PokemonService) { }

    savePokemon(formValues: any) {
        this._pokemonService.addPokemon(formValues)
                .subscribe(
                    (res: any) => {
                        console.log('Pokemon Saved');
                        this._router.navigate(['/'])
                    },
                    (error: any) => console.log('error', error)
                )
    }
}