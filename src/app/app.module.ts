import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MenuComponent } from './components/menu/menu.component';


// material
import { MaterialModule } from './material/material.module';
import { UserComponent } from './vistas/forms/user/user.component';
import { ProductComponent } from './vistas/forms/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SubHeaderComponent,
    MainHeaderComponent,
    MenuComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
