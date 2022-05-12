import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    DefaultLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule
  ],
  exports: [DefaultLayoutComponent]
})
export class DefaultLayoutModule { }
