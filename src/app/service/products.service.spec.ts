import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Product } from '../classes/product';
import { products } from '../mock-data/products';

describe('ProductsService', () => {
    let service: ProductsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = new ProductsService();
    });

    it('should be created', () => {
        const service: ProductsService = TestBed.get(ProductsService);
        expect(service).toBeTruthy();
    });

    it('#getWishlist should return wishlist from observable', (done: DoneFn) => {
        service.getWishlist().subscribe((wishlist: Array<Product>) => {
            expect(wishlist).toEqual([]);
            done();
        });
    });

    it('#getProducts should return products from observable', (done: DoneFn) => {
        service.getProducts().subscribe((retrievedProducts: Array<Product>) => {
            expect(retrievedProducts).toEqual(products);
            done();
        });
    });
});
