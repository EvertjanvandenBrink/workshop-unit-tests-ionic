import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ProductsComponent } from '../components/products/products.component';
import { WishlistComponent } from '../components/wishlist/wishlist.component';
import { ProductsService } from '../service/products.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [
        HomePage,
        ProductsComponent,
        WishlistComponent,
    ],
    entryComponents: [
        ProductsComponent,
        WishlistComponent
    ],
    providers: [
        ProductsService
    ]
})
export class HomePageModule {
}
