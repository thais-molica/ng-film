import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
    title: string;
  @Input()
    date: string;
  @Input()
    img: string;
  @Input()
    id: string;
  @Input()
    rate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
