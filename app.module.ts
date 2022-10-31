import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ConformOrderComponent } from './components/conform-order/conform-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
// import { SihnUpComponent } from './components/sihn-up/sihn-up.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// materieals////////////////
import {
  MatNativeDateModule,
  MatOptionModule,
  MatOptionSelectionChange,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';

import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyorderComponent,
    CardComponent,
    ProductsComponent,
    ConformOrderComponent,
    LoginComponent,

    SignUpComponent,
    AdminDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,
    MatOptionModule,
    ChartjsModule,
    DropdownModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
