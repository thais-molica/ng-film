import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.fetchFilm().subscribe(data => console.log(data));
  }

}
