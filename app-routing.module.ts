import { NgModule } from '@angular/core';

import { AuthGuardAdminType } from './auth.guard.adminType';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ConformOrderComponent } from './components/conform-order/conform-order.component';
import { LoginComponent } from './components/login/login.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { ProductsComponent } from './components/products/products.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'card',
    component: CardComponent,
    canActivate: [AuthGuardAdminType],
  },
  {
    path: 'products,id',
    component: ProductsComponent,
    canActivate: [AuthGuardAdminType],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuardAdminType],
  },
  {
    path: 'myorder',
    component: MyorderComponent,
    canActivate: [AuthGuardAdminType],
  },
  {
    path: 'conformOrder',
    component: ConformOrderComponent,
    canActivate: [AuthGuardAdminType],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'singUp',
    component: SignUpComponent,
  },

  {
    path: 'AdminDaash',
    component: AdminDashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
