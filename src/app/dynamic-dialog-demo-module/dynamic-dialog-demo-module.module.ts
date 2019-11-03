import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { CommonDialogComponent } from './common-dialog/common-dialog.component';
import { EditPublicationComponent } from './common-dialog/common-dialog.component';
import {CardModule} from 'primeng/card';
import {CalendarModule, DropdownModule, InputTextModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';




@NgModule({
  imports: [
    CommonModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    DropdownModule
  ],
  declarations: [
    EditPublicationComponent,
    DynamicDialogComponent,
    CommonDialogComponent
  ],
  entryComponents: [
    EditPublicationComponent
  ]
})
export class DynamicDialogDemoModuleModule {
  private static ToastModule: any;
}
