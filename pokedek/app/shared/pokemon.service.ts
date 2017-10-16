import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Pokemon} from "./pokemon";

@Injectable()
export class PokemonService {
    private pokemonUrl: string = 'api/pokemons';
    constructor(private _http: Http) {}

    getPokemons(): Observable<Pokemon[]> {
        return this._http
            .get(this.pokemonUrl)
            .map((res: Response) => <Pokemon[]> res.json().data)
            .do((data: Pokemon[]) => console.log(data))
            .catch(this.handlEerror)
    }
    getPokemonDetails(id: number): Observable<Pokemon> {
        let url = `${this.pokemonUrl}/${id}`
        return this._http
                .get(url)
                .map((res: Response) => <Pokemon> res.json().data)
                .do((data: Pokemon) => console.log(data))
                .catch(this.handlEerror)
    }
    deletePokemon(pokemon: Pokemon): Observable<Response> {
        let headers = new Headers({'Content-Type': 'applicationCache.json'});
        let options = new RequestOptions({headers});
        let url = `${this.pokemonUrl}/${pokemon.id}`;

        return this._http
            .delete(url, options)
                .catch(this.handlEerror);
    }

    addPokemon(pokemon: any): Observable<Pokemon> {
        let headers = new Headers({'Content-Type': 'applicationCache.json'});
        let options = new RequestOptions({headers});
        let url = `${this.pokemonUrl}`;
        let body = JSON.stringify(pokemon);
        return this._http
                .post(url, body, options)
                .map((res: Response) => res.json())
                .do((data) => console.log(data))
                .catch(this.handlEerror);
    }

    private handlEerror(error: Response) {
        let msg = `Error status code ${error.status} status ${error.statusText} as ${error.url}`;
        return Observable.throw(msg);
    }
}