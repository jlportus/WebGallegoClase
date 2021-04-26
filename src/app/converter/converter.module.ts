import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConverterRoutingModule } from "./converter-routing.module";
import { ConverterComponent } from "./converter/converter.component";
import { FormsModule } from "@angular/forms";
import { CultureConverterComponent } from './culture-converter/culture-converter.component';

@NgModule({
  declarations: [ConverterComponent, CultureConverterComponent],
  imports: [CommonModule, ConverterRoutingModule, FormsModule],
})
export class ConverterModule {}
