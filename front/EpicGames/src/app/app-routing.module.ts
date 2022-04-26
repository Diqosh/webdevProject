import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsWrapperComponent} from "./products-wrapper/products-wrapper.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: 'home', component: ProductsWrapperComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
