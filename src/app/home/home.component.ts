import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  base_url: string;
  size: string;
  mostPopular = [];
  latest = [];
  bestRated = [];
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.setImg();
  }

  getInfo(): void {
    this.getLatest();
    this.getPopular();
    this.getBestRated();
  }

  getPopular(): void {
    this.filmService.fetchPopular().subscribe((data) => {
      data['results'].map((item: any) => {
        item.poster_path = this.imgPath(item.poster_path);
        item.href = this.detailUrl(item.id);
        this.mostPopular.push(item);
      });
    });
  }

  getLatest(): void {
    this.filmService.fetchLatest().subscribe((data) => {
      data['results'].map((item: any) => {
        item.poster_path = this.imgPath(item.poster_path);
        item.href = this.detailUrl(item.id);
        this.latest.push(item);
      });
    });
  }

  getBestRated(): void {
    this.filmService.fetchBestRated().subscribe((data) => {
      data['results'].map((item: any) => {
        item.poster_path = this.imgPath(item.poster_path);
        item.href = this.detailUrl(item.id);
        this.bestRated.push(item);
      });
    });
  }

  setImg(): void {
    this.filmService.fetchConfig().subscribe((data) => {
      this.base_url = data['images']['base_url'];
      this.size = data['images']['poster_sizes'][2];
      this.getInfo();
    });
  }

  detailUrl(id) {
    return `detail/${id}`
  }

  imgPath(poster_path) {
    return `${this.base_url}${this.size}/${poster_path}`
  }
}
