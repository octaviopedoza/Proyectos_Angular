import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaPageComponent } from './clima-page/clima-page.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ClimaPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class ClimaModule { }
