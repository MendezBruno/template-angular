import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../vistas/principal/principal.component';
import { ProductComponent } from '../vistas/forms/product/product.component';
import { UserComponent } from '../vistas/forms/user/user.component';
import { FaceGoogleComponent } from '../vistas/logins/face-google/face-google.component';
import { LoginAdminComponent } from '../vistas/logins/login-admin/login-admin.component';
import { UserPasswordComponent } from '../vistas/logins/user-password/user-password.component';
import { TurnosComponent } from '../vistas/forms/turnos/turnos.component';
import { StickToolbarComponent } from '../components/toolbars/stick-toolbar/stick-toolbar.component';
import { SimpleStickToolbarComponent } from '../components/toolbars/simple-stick-toolbar/simple-stick-toolbar.component';
import { UserGoogleMapsComponent } from '../vistas/forms/user-google-maps/user-google-maps.component';
import { MercadoPagoTestComponent } from '../vistas/mercado-pago-test/mercado-pago-test.component';
import { MonoOrgComponent } from '../vistas/principales/mono-org/mono-org.component';
import { ReactiveFormOneComponent } from '../vistas/forms/reactive-form-one/reactive-form-one.component';
import { CommonsViewComponent } from '../vistas/shared-components/commons-view/commons-view.component';
import { SpinnerTestComponent } from '../vistas/tests/spinner-test/spinner-test.component';
import { CssTestComponent } from '../vistas/tests/css-test/css-test.component';
import { FutbolHoyComponent } from '../vistas/principales/futbol-hoy/futbol-hoy.component';
import { VistaCanvasComponent } from '../vistas/tests/vista-canvas/vista-canvas.component';
import { MarketUnoComponent } from '../vistas/cards/market-uno/market-uno.component';
import { VistaDinamicaComponent } from '../cdk-components/vista-dinamica/vista-dinamica.component';
import { ExpresionesRegularesComponent } from '../vistas/tests/expresiones-regulares/expresiones-regulares.component';
import { RegistrationFormOneComponent } from '../vistas/logins/registration-form-one/registration-form-one.component';
import { SingUpComponent } from '../vistas/logins/sing-up/sing-up.component';
import { CalendarioComponent } from '../commons-components/calendario/calendario.component';
import { MenuHamburguesaAdaptativeComponent } from '../vistas/menus/menu-hamburguesa-adaptative/menu-hamburguesa-adaptative.component';
import { MarketDosComponent } from '../vistas/cards/market-dos/market-dos.component';
import { UserCardDosComponent } from '../vistas/user-cards/user-card-dos/user-card-dos.component';
import { UserCardUnoComponent } from '../vistas/user-cards/user-card-uno/user-card-uno.component';
import { SideBarOneComponent } from '../vistas/menus/side-bar-one/side-bar-one.component';
import { MarketTresComponent } from '../vistas/cards/market-tres/market-tres.component';
import { CardsTestComponent } from '../vistas/principales/cards-test/cards-test.component';
import { ListItemsComponent } from '../commons-components/list-items/list-items.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'cdk-components/vista-dinamica', component: VistaDinamicaComponent },
  { path: 'commons-components/calendario', component: CalendarioComponent },
  { path: 'commons-components/list-items', component: ListItemsComponent },
  { path: 'components/toolbars/simple-stick-toolbar', component: SimpleStickToolbarComponent },
  { path: 'components/toolbars/stick-toolbar', component: StickToolbarComponent },
  { path: 'vistas/cards/market-uno', component: MarketUnoComponent},
  { path: 'vistas/cards/market-dos', component: MarketDosComponent},
  { path: 'vistas/cards/market-tres', component: MarketTresComponent},
  { path: 'vistas/user-cards/user-card-uno', component: UserCardUnoComponent},
  { path: 'vistas/user-cards/user-card-dos', component: UserCardDosComponent},
  { path: 'vistas/forms/product', component: ProductComponent },
  { path: 'vistas/forms/user', component: UserComponent },
  { path: 'vistas/forms/turnos', component: TurnosComponent },
  { path: 'vistas/forms/registrationOne', component: RegistrationFormOneComponent },
  { path: 'vistas/forms/singUp', component: SingUpComponent },
  { path: 'vistas/forms/userGoogleMap', component: UserGoogleMapsComponent },
  { path: 'vistas/mercado-pago-test', component: MercadoPagoTestComponent },
  { path: 'vistas/forms/reactive-form-one', component: ReactiveFormOneComponent },
  { path: 'vistas/tests/spinnerTests', component: SpinnerTestComponent },
  { path: 'vistas/tests/cssTest', component: CssTestComponent },
  { path: 'vistas/tests/vistaCanvas', component: VistaCanvasComponent },
  { path: 'vistas/tests/expresiones-regulares', component: ExpresionesRegularesComponent },
  { path: 'vistas/principales/monoOrg', component: MonoOrgComponent },
  { path: 'vistas/components/commons', component: CommonsViewComponent },
  { path: 'vistas/menus/menu-hamburguesa-adaptative', component: MenuHamburguesaAdaptativeComponent },
  { path: 'vistas/menus/menu-side-bar', component: SideBarOneComponent },
  { path: 'vistas/principales/futbol-hoy', component: FutbolHoyComponent },
  { path: 'vistas/principales/cards-test', component: CardsTestComponent },
  { path: 'login/face-google', component: FaceGoogleComponent },
  { path: 'login/login-admin', component: LoginAdminComponent },
  { path: 'login/user-password', component: UserPasswordComponent },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
