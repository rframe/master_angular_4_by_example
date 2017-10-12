import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {clone} from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
    public products: Product[];
    public productForm: boolean;
    public editProductForm: boolean;
    public isNewForm: boolean;
    public newProduct: any = {};
    public editedProduct: any = {};

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
        this.editProductForm = true;
        this.productForm = false;
        this.editedProduct = clone(product);
    }
    showAddProductForm() {
        // resets form if edited
        if (!!this.products.length) {
            this.newProduct = {};
        }
        this.editProductForm = false;
        this.productForm = true;
        this.isNewForm = true;

    }
    saveProduct(product: Product) {
        if (this.isNewForm) {
            //This is a new product
            //add
            this._productService.addProduct(product);
        }
        // this.getProducts();
        this.productForm = false;
    }
    updateProduct(product: Product) {
        this._productService.updateProduct(this.editedProduct);
        this.cancelEdits();
    }
    cancelEdits() {
        this.editProductForm = false;
        this.editedProduct = {};

    }
    removeProduct(product: Product) {
        this._productService.deleteProduct(product);
    }
    cancelNewProduct() {
        this.newProduct = {};
        this.productForm = false;
    }
}
