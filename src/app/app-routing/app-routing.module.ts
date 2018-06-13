import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../vistas/principal/principal.component';
import { ProductComponent } from '../vistas/forms/product/product.component';
import { UserComponent } from '../vistas/forms/user/user.component';
import { FaceGoogleComponent } from '../vistas/logins/face-google/face-google.component';
import { LoginAdminComponent } from '../vistas/logins/login-admin/login-admin.component';
import { UserPasswordComponent } from '../vistas/logins/user-password/user-password.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'vistas/forms/product', component: ProductComponent },
  { path: 'vistas/forms/user', component: UserComponent },
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
