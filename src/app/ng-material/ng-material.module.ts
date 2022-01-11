import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxDialogModule } from '@ng-matero/extensions/dialog'
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MtxGridModule,
    MtxDialogModule,
    MatPaginatorModule
  ],
  exports: [
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MtxGridModule,
    MtxDialogModule,
    MatPaginatorModule

  ]
})

export class NgMaterialModule { }