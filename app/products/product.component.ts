import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    public products: Product[];
    public productForm: boolean;
    public isNewForm: boolean;
    public newProduct: any = {};

    constructor(private _productService: ProductService){}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.products = this._productService.getProducts();
    }
    showEditProductForm(product: Product) {
        if(!product) {
            this.productForm = false;
            return;
        }
        this.productForm = true;
        this.isNewForm = false;
        this.newProduct = product;
    }
    showAddProductForm() {
        this.productForm = true;
        this.isNewForm = true;
        this.newProduct = {};
    }
    saveProduct() {}
}
