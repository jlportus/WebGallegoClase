import { Component, OnInit } from "@angular/core";
import { AbstractCultureConverterService } from "../service/abstract-culture-converter.service";

@Component({
  selector: "app-culture-converter",
  templateUrl: "./culture-converter.component.html",
  styles: [],
})
  
export class CultureConverterComponent implements OnInit {
  public sourceCulture: string;
  public targetCulture: string;
  public sourceUnits = 0;
  public targetUnits: number;

  constructor(
    private cultureConverterService: AbstractCultureConverterService
  ) {}

  ngOnInit() {
    this.sourceCulture = this.cultureConverterService.sourceCulture;
    this.targetCulture = this.cultureConverterService.targetCulture;
    this.convert();
  }

  public convert(): void {
    this.targetUnits = this.cultureConverterService.convertDistance(this.sourceUnits);
  }
}
