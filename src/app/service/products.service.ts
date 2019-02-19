import { Injectable } from '@angular/core';
import { products } from '../mock-data/products';
import { ReplaySubject } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products: Array<Product>;
    private products$: ReplaySubject<Array<Product>>;

    private wishlist: Array<Product>;
    private wishlist$: ReplaySubject<Array<Product>>;

    constructor() {
        this.products  = products;
        this.products$ = new ReplaySubject(1);
        this.products$.next(this.products);

        this.wishlist  = [];
        this.wishlist$ = new ReplaySubject(1);
        this.wishlist$.next(this.wishlist);
    }

    getProducts(): ReplaySubject<Array<Product>> {
        return this.products$;
    }

    getWishlist(): ReplaySubject<Array<Product>> {
        return this.wishlist$;
    }

    addToWishlist(productId) {
        // Find product
        const product = this.products.find((product: Product) => product.id === productId);

        // Add product to wishlist
        this.wishlist.push(product);

        // Notify wishlist followers
        this.wishlist$.next(this.wishlist);
    }

    removeFromWishlist(productId) {
        // Remove from wishlist
        this.wishlist = this.wishlist.filter((product: Product) => product.id !== productId);

        // Notify wishlist observers
        this.wishlist$.next(this.wishlist);
    }
}
