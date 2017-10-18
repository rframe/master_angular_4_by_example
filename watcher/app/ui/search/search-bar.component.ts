/**
 * Created by russell.frame on 10/18/2017.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'tv-search-bar',
    template: `
            <form action="" class="form-inline float-xs-right">
                <input type="text" class="from-control" placeholder="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
    `
})
export class SearchBarComponent {
}