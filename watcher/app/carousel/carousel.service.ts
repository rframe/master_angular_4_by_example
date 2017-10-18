/**
 * Created by russell.frame on 10/18/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Carousel} from './carousel';

@Injectable()
export class CarouselService {

    /**
     * Class constuctor function
     * @param _http {Http} - angular http provider
     */
    constructor(_http: Http) { }

}
