import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDatailComponent } from './product-datail/product-datail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './contact/dni/dni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ProductDatailComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for template driven forms
    ReactiveFormsModule // for reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
