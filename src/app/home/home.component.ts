import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  results: any[];
  mostPopular = [];
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.fetchPopular().subscribe((data) => {
      data['results'].map((item: any) => {
        item.poster_path = `https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`
        this.mostPopular.push(item)
      });
      console.log(this.mostPopular);
    });
  }
}
