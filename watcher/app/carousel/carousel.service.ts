/**
 * Created by russell.frame on 10/18/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Carousel} from './carousel';

@Injectable()
export class CarouselService {
    private carouselUrl: string = 'api/carousel_items.json';
    /**
     * Class constuctor function
     * @param _http {Http} - angular http provider
     */
    constructor(private _http: Http) { }

    featured(): Observable<Carousel[]> {
        return this._http
                .get(this.carouselUrl)
                .map((response: Response) => <Carousel[]> response.json())
                .do((data: Carousel[]) => console.log(data))
                .catch(this.handleError)
    }

    private handleError(error: Response) {
        let msg = `Errro status code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(msg);
    }

}
