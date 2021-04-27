import { Component, OnInit } from "@angular/core";
import { Propietario } from "../models/propietario";
import { PropietarioService } from "../services/propietario.service";

@Component({
  selector: "app-propietarios",
  templateUrl: "./propietarios.component.html",
  styles: [],
})
export class PropietariosComponent implements OnInit {
  public arrayPropietarios$: Propietario[] = [];

  constructor(private servicioPropietarios: PropietarioService) {}

  ngOnInit() {
    this.servicioPropietarios.getPropietarios().subscribe((response) => {
      response.forEach((p) => {
        this.arrayPropietarios$.push(p);
      });
    });
    console.log(`Estoy en el componente `)
    console.log(this.arrayPropietarios$)
  }
}
