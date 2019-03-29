import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrowpdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DrowpdownDirective
  ],
  exports: [
    CommonModule,
    DrowpdownDirective
  ]
})

export class SharedModule{}