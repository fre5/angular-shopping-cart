//Built-in
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { TotalComponent } from './components/total/total.component';
import { SuccessComponent } from './components/success/success.component';
import { EmptyComponent } from './components/empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavBarComponent,
    ProductItemComponent,
    ProductPageComponent,
    CartItemComponent,
    CartComponent,
    CheckoutFormComponent,
    TotalComponent,
    SuccessComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
