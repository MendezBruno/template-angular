import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MenuComponent } from './components/menu/menu.component';


// material
import { UserComponent } from './vistas/forms/user/user.component';
import { ProductComponent } from './vistas/forms/product/product.component';
import { FaceGoogleComponent } from './vistas/logins/face-google/face-google.component';
import { UserPasswordComponent } from './vistas/logins/user-password/user-password.component';
import { LoginAdminComponent } from './vistas/logins/login-admin/login-admin.component';
import { CarnesLaColoradaComponent } from './vistas/principales/carnes-la-colorada/carnes-la-colorada.component';
import { FutbolHoyComponent } from './vistas/principales/futbol-hoy/futbol-hoy.component';
import { FutbolRocolaComponent } from './vistas/principales/futbol-rocola/futbol-rocola.component';
import { TurnosComponent } from './vistas/forms/turnos/turnos.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SubHeaderComponent,
    MainHeaderComponent,
    MenuComponent,
    UserComponent,
    ProductComponent,
    FaceGoogleComponent,
    UserPasswordComponent,
    LoginAdminComponent,
    CarnesLaColoradaComponent,
    FutbolHoyComponent,
    FutbolRocolaComponent,
    TurnosComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
