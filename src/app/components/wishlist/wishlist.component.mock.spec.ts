import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import {Product} from '../../classes/product';
import {ProductsService} from '../../service/products.service';

describe('WishlistComponent', () => {
    let service: ProductsService;
    let component: WishlistComponent;
    let fixture: ComponentFixture<WishlistComponent>;

    beforeEach(() => {
        service = new ProductsService();
        component = new WishlistComponent(service);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should remove product from wishlist with spy', () => {
        const product = new Product();

        spyOn(service, 'removeFromWishlist');
        component.removeProductFromWishlist(product);

        expect(service.removeFromWishlist).toHaveBeenCalledTimes(1);
    });
});
