import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Product } from '../../classes/product';
import { ProductsService } from '../../service/products.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
    wishlist: Array<Product> = [];

    constructor(
        protected productService: ProductsService
    ) {
        const wishlist$: ReplaySubject<Array<Product>> = productService.getWishlist();
        wishlist$.subscribe((wishlist: Array<Product>) => {
            this.wishlist = wishlist;

            console.log('Component | Wishlist: ', this.wishlist);
        }, (error) => {
            console.log(`Error: ${error}`);
        });
    }

    ngOnInit() {
    }

    removeProductFromWishlist(product: Product) {
        this.productService.removeFromWishlist(product.id);
    }

}
