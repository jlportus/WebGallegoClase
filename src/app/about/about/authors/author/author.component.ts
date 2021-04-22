import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: []
})
export class AuthorComponent implements OnInit {
  public variableUrl = ``;

  constructor(activeRouting: ActivatedRoute) {
    this.variableUrl = activeRouting.snapshot.params['id'];
    console.log(this.variableUrl)
  }

  ngOnInit() {
  }

}
