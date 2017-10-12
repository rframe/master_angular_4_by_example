import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Pokemon} from "./pokemon";

@Injectable()
export class PokemonService {
    private pokemonUrl: string = 'api/pokemons_25.json'
    constructor(private _http: Http) {}

    getPokemons(): Observable<Pokemon[]> {
        return this._http
            .get(this.pokemonUrl)
            .map((res: Response) => <Pokemon[]> res.json())
            .do((data: Pokemon[]) => console.log(data))
            .catch(this.handlEerror)
    }

    private handlEerror(error: Response) {
        let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
        return Observable.throw(msg);
    }
}