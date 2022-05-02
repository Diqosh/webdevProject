import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { ProductsWrapperComponent } from './products-wrapper/products-wrapper.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./AuthInterseptor";
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddgameComponent } from './addgame/addgame.component';
import { EditgameComponent } from './editgame/editgame.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimaryNavigationComponent,
    ProductsWrapperComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    AddgameComponent,
    EditgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
