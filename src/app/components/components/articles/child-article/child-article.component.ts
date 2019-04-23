import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-article',
  templateUrl: './child-article.component.html',
  styleUrls: ['./child-article.component.css']
})
export class ChildArticleComponent implements OnInit {

  @Input() childMessage;
  constructor() { }

  ngOnInit() {
  }

}
