import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietariosRoutingModule } from './propietarios-routing.module';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioComponent } from './propietarios/propietario/propietario.component';


@NgModule({
  declarations: [PropietariosComponent, PropietarioComponent],
  imports: [
    CommonModule,
    PropietariosRoutingModule
  ]
})
export class PropietariosModule { }
