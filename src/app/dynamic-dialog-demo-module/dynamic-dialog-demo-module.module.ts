import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { CommonDialogComponent } from './common-dialog/common-dialog.component';
import { EditPublicationComponent } from './common-dialog/common-dialog.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule
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
