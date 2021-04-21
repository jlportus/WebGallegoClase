import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotFoundComponent } from "./core/not-found/not-found.component";
import { HomeComponent } from "./home/home/home.component";

const routes: Routes = [
  {
    path: ``,
    loadChildren: () =>
      import("src/app/home/home.module").then((m) => m.HomeModule),
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
