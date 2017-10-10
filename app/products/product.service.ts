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

    addProduct(product: Product) {
        // This does not work for this function as we are doing everything in the component referencing the object
        // this.pItems = [
        //     ...this.pItems,
        //     product
        // ];

        this.pItems.push(product);
        console.log(this.pItems);
    }
}