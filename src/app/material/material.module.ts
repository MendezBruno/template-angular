import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
         // Forms
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatSlideToggleModule,
         // Navigation
         MatToolbarModule,
         MatMenuModule,
         MatSidenavModule,
         // Layouts
         MatCardModule,
         MatGridListModule,
         MatListModule,
         // Buttons & Indicators
         MatIconModule,
         MatButtonModule,
         MatChipsModule,
         MatButtonToggleModule,
         // Popups & Modals
         MatDialogModule,

         } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    // Forms
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    // Navigation
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    // Layouts
    MatCardModule,
    MatGridListModule,
    MatListModule,
    // Buttons & Indicators
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatButtonToggleModule,
    // Popups & Modals
    MatDialogModule,

  ],
  exports: [
    CommonModule,
    // Forms
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    // Navigation
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    // Layouts
    MatCardModule,
    MatGridListModule,
    MatListModule,
    // Buttons & Indicators
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatButtonToggleModule,
    // Popups & Modals
    MatDialogModule,
]
})
export class MaterialModule { }
