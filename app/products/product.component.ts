import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    public products: Product[]
    constructor(private _productService: ProductService){}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.products = this._productService.getProducts();
    }
}
