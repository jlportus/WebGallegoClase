import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  {
    path: ``,
    loadChildren: () =>
      import("src/app/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: `about`,
    loadChildren: () =>
      import("src/app/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: `contacts`,
    loadChildren: () =>
      import("src/app/contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: `car`,
    loadChildren: () =>
      import("src/app/car/car.module").then((m) => m.CarModule),
  },
  {
    path: `converter`,
    loadChildren: () =>
      import("src/app/converter/converter.module").then(
        (m) => m.ConverterModule
      ),
  },
  {
    path: "propietarios",
    loadChildren: () =>
      import("./propietarios/propietarios.module").then(
        (m) => m.PropietariosModule
      ),
  },
  {
    path: `not-found`,
    component: NotFoundComponent,
  },
  {
    path: `**`,
    redirectTo: `not-found`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
