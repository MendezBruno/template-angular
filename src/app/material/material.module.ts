import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,
         MatDialogModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatInputModule,
         MatSelectModule,
         MatChipsModule,
         MatSidenavModule,
         MatSlideToggleModule,
         MatButtonToggleModule
         } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonToggleModule

  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonToggleModule
]
})
export class MaterialModule { }
