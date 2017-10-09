import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './product';
import {PRODUCT_ITEMS} from './product-data';


@Injectable()
export class ProductService {
    private pItems = PRODUCT_ITEMS;

    getProducts(): Product[] {
        console.log(this.pItems);
        return this.pItems;
    }
}