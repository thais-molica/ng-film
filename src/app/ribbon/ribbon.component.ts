import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
  @Input()
    category: string;
  @Input()
    films: Array<Object>;

  constructor() { }

  ngOnInit(): void {
  }

}
