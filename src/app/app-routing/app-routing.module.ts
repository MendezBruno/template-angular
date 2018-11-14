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


const appRoutes: Routes = [
  { path: '',   redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'components/toolbars/simple-stick-toolbar', component: SimpleStickToolbarComponent },
  { path: 'components/toolbars/stick-toolbar', component: StickToolbarComponent },
  { path: 'vistas/forms/product', component: ProductComponent },
  { path: 'vistas/forms/user', component: UserComponent },
  { path: 'vistas/forms/turnos', component: TurnosComponent },
  { path: 'vistas/forms/userGoogleMap', component: UserGoogleMapsComponent },
  { path: 'vistas/mercado-pago-test', component: MercadoPagoTestComponent }, 
  { path: 'vistas/forms/reactive-form-one', component: ReactiveFormOneComponent },
  { path: 'vistas/tests/spinnerTests', component: SpinnerTestComponent },
  { path: 'vistas/tests/cssTest', component: CssTestComponent },
  { path: 'vistas/principales/monoOrg', component: MonoOrgComponent },
  { path: 'vistas/components/commons', component: CommonsViewComponent },
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
