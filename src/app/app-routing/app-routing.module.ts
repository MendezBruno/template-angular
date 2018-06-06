import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../app/components/principal/principal.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },

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
