import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input()
    rate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
