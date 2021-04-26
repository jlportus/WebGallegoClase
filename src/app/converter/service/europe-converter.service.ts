import { Injectable } from "@angular/core";
import { ConverterService } from "./converter.service";

@Injectable({
  providedIn: "root",
})
export class EuropeConverterService {
  sourceCulture = "USA";
  targetCulture = "Europe";

  constructor(private converterService: ConverterService) {}

  convertDistance = this.converterService.fromMilesToKilometers;

  convertTemperature = this.converterService.fromFarenheitToCelsius;
}
