import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistComponent } from './wishlist.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('WishlistComponent', () => {
    let component: WishlistComponent;
    let fixture: ComponentFixture<WishlistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WishlistComponent ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WishlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should contain title "Wishlist"', () => {
        // Here comes your first component test.
    });
});
