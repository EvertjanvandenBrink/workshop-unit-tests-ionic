import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

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

    it('#getWishlist should return wishlist from observable', () => {
        // Here comes you first service test
    });

    it('#getProducts should return products from observable', () => {
        // Here comes your second service test
    });
});
