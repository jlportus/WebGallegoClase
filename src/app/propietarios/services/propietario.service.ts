import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Propietario } from "../models/propietario";

@Injectable({
  providedIn: "root",
})
export class PropietarioService {
  private urlEndPoint: string = environment.hostControladores + `propietarios`;

  constructor(private http: HttpClient) {}

  getPropietarios(): Observable<Propietario[]> {
    let arrayPropietarios = this.http.get<Propietario[]>(this.urlEndPoint);
    console.log(arrayPropietarios);
    console.log(`estoy en el servicio`)
    console.log(arrayPropietarios)
    return arrayPropietarios;
  }
}
