import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Product } from '../../classes/product';
import { ProductsService } from '../../service/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: Array<Product>;

    constructor(
        protected productService: ProductsService
    ) {
        const product$: ReplaySubject<Array<Product>> = productService.getProducts();
        product$.subscribe((products: Array<Product>) => {
            this.products = products;
        }, (error) => {
            console.log(`Error: ${error}`);
        });
    }

    ngOnInit() {
    }

    addProductToWishlist(product: Product) {
        this.productService.addToWishlist(product.id);
    }
}
