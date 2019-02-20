import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { SubHeaderComponent } from './components/toolbars/sub-header/sub-header.component';
import { MainHeaderComponent } from './components/toolbars/main-header/main-header.component';
import { MenuComponent } from './components/menu/menu.component';


// material components
import { UserComponent } from './vistas/forms/user/user.component';
import { ProductComponent } from './vistas/forms/product/product.component';
import { FaceGoogleComponent } from './vistas/logins/face-google/face-google.component';
import { UserPasswordComponent } from './vistas/logins/user-password/user-password.component';
import { LoginAdminComponent } from './vistas/logins/login-admin/login-admin.component';
import { CarnesLaColoradaComponent } from './vistas/principales/carnes-la-colorada/carnes-la-colorada.component';
import { FutbolHoyComponent } from './vistas/principales/futbol-hoy/futbol-hoy.component';
import { TurnosComponent } from './vistas/forms/turnos/turnos.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { StickToolbarComponent } from './components/toolbars/stick-toolbar/stick-toolbar.component';
import { SimpleStickToolbarComponent } from './components/toolbars/simple-stick-toolbar/simple-stick-toolbar.component';
import { UserGoogleMapsComponent } from './vistas/forms/user-google-maps/user-google-maps.component';
import { MercadoPagoTestComponent } from './vistas/mercado-pago-test/mercado-pago-test.component';
import { MonoOrgComponent } from './vistas/principales/mono-org/mono-org.component';
import { MainTransparentHeadersComponent } from './components/toolbars/main-transparent-headers/main-transparent-headers.component';
import { Carruselv2Component } from './components/carruselv2/carruselv2.component';
import { ItemUnoComponent } from './components/items/item-uno/item-uno.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ItemDosComponent } from './components/items/item-dos/item-dos.component';
import { FooterUnoComponent } from './components/footers/footer-uno/footer-uno.component';
import { VideoComponent } from './components/video/video.component';
import { FunctionSatisfyDirective } from './directives/function-satisfy.directive';
import { ReactiveFormOneComponent } from './vistas/forms/reactive-form-one/reactive-form-one.component';
import { DropLoadFileComponent } from './commons-components/drop-load-file/drop-load-file.component';
import { CommonsViewComponent } from './vistas/shared-components/commons-view/commons-view.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerTestComponent } from './vistas/tests/spinner-test/spinner-test.component';
import { CommunicationService } from './services/communication.service';
import { DesplegableButtonComponent } from './components/buttons/desplegable-button/desplegable-button.component';
import { PedidosComponent } from './vistas/principales/pedidos/pedidos.component';
import { CalendarioComponent } from './commons-components/calendario/calendario.component';
import { CssTestComponent } from './vistas/tests/css-test/css-test.component';
import { BateryComponent } from './components/css/batery/batery.component';
import { EstadosComponent } from './components/css/estados/estados.component';
import { MonoCanvasComponent } from './components/mono-canvas/mono-canvas.component';
import { VistaCanvasComponent } from './vistas/tests/vista-canvas/vista-canvas.component';
import { TurnButtonComponent } from './components/buttons/turn-button/turn-button.component';
import { EffectsButtonComponent } from './components/buttons/effects-button/effects-button.component';
import { MarketUnoComponent } from './vistas/cards/market-uno/market-uno.component';



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
    TurnosComponent,
    CarruselComponent,
    StickToolbarComponent,
    SimpleStickToolbarComponent,
    UserGoogleMapsComponent,
    MercadoPagoTestComponent,
    MonoOrgComponent,
    MainTransparentHeadersComponent,
    Carruselv2Component,
    ItemUnoComponent,
    FormularioComponent,
    ItemDosComponent,
    FooterUnoComponent,
    VideoComponent,
    FunctionSatisfyDirective,
    ReactiveFormOneComponent,
    DropLoadFileComponent,
    CommonsViewComponent,
    SpinnerComponent,
    SpinnerTestComponent,
    DesplegableButtonComponent,
    PedidosComponent,
    CalendarioComponent,
    CssTestComponent,
    BateryComponent,
    EstadosComponent,
    MonoCanvasComponent,
    VistaCanvasComponent,
    TurnButtonComponent,
    EffectsButtonComponent,
    MarketUnoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    ScrollDispatchModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
