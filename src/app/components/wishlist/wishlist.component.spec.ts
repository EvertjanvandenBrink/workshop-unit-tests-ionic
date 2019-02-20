import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import {products} from '../../mock-data/products';
import {Product} from '../../classes/product';

describe('WishlistComponent', () => {
    let component: WishlistComponent;
    let fixture: ComponentFixture<WishlistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WishlistComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture   = TestBed.createComponent(WishlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should remove product from wishlist', () => {
       // Here comes your first component test.
    });
});
