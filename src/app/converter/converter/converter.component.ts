import { Component, OnInit } from "@angular/core";
import { ConverterService } from "../service/converter.service";


@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styles: [],
})
export class ConverterComponent implements OnInit {
  public kilometers = 0;
  public miles: number;

  constructor(private converterService: ConverterService) {}

  ngOnInit() {
    this.convert();
  }

  convert() {
    this.miles = this.converterService.fromKilometersToMiles(this.kilometers);
  }
}
