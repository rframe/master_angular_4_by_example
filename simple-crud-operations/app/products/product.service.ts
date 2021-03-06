import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './product';
import {PRODUCT_ITEMS} from './product-data';
import {findIndex, remove} from "lodash";

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
    updateProduct(product: Product) {
       const index =  findIndex(this.pItems, (p: Product) => p.id === product.id);
       this.pItems[index] = product;
    }
    deleteProduct(product: Product) {
        this.pItems.splice(this.pItems.indexOf(product), 1)
        console.log(this.pItems);
    }
}