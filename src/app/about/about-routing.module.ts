import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AuthorComponent } from "./about/authors/author/author.component";
import { AuthorsComponent } from "./about/authors/authors.component";
import { InfoComponent } from "./about/info/info.component";
import { LinksComponent } from "./about/links/links.component";

const routes: Routes = [
  {
    path: ``,
    component: AboutComponent,

    children: [
      {
        path: `links`,
        component: LinksComponent,
      },
      {
        path: `info`,
        component: InfoComponent,
      },
      {
        path: `autores`,
        component: AuthorsComponent,
      },
      {
        path: `autores/:id`,
        component: AuthorComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
