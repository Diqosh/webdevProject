import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsWrapperComponent} from "./products-wrapper/products-wrapper.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {AddgameComponent} from "./addgame/addgame.component";
import {EditgameComponent} from "./editgame/editgame.component";
import {MainSearchComponent} from "./main-search/main-search.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";


const routes: Routes = [
  {path: 'home', component: ProductsWrapperComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'search', component: MainSearchComponent},
  {path: 'add_game', component: AddgameComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: 'edit_game/:id', component: EditgameComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
