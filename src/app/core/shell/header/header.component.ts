import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent implements OnInit {
  private title = environment.title;
  constructor() {}

  ngOnInit() {}
}
