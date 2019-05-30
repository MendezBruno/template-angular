import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { VistaDinamicaComponent, ComponentPortalExample } from './cdk-components/vista-dinamica/vista-dinamica.component';
import { ActionButtonComponent } from './cdk-components/vista-dinamica/action-button.component';
import { NavbarWithPortalComponent } from './cdk-components/navbar-with-portal/navbar-with-portal.component';
import { SupportComponent } from './cdk-components/vista-dinamica/support/support.component';
// Directivas
import { PriceFormaDirective } from './directives/price-forma.directive';
import { FunctionSatisfyDirective } from './directives/function-satisfy.directive';
import { ExpresionesRegularesComponent, Fcv } from './vistas/tests/expresiones-regulares/expresiones-regulares.component';
import { RegistrationFormOneComponent } from './vistas/logins/registration-form-one/registration-form-one.component';
import { SingUpComponent } from './vistas/logins/sing-up/sing-up.component';
import { MenuHamburguesaAdaptativeComponent } from './vistas/menus/menu-hamburguesa-adaptative/menu-hamburguesa-adaptative.component';
import { SideBarOneComponent } from './vistas/menus/side-bar-one/side-bar-one.component';




@NgModule({
  entryComponents:[ActionButtonComponent, FaceGoogleComponent, SupportComponent],
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
    // Directivas
    FunctionSatisfyDirective,
    PriceFormaDirective,
    // fin de directivas
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
    VistaDinamicaComponent,
    ActionButtonComponent,
    NavbarWithPortalComponent,   
    ComponentPortalExample,
    SupportComponent,
    ExpresionesRegularesComponent,
    RegistrationFormOneComponent,
    SingUpComponent,
    Fcv,
    MenuHamburguesaAdaptativeComponent,
    SideBarOneComponent
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
    PortalModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
