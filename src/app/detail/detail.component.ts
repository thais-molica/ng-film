import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  base_url: string;
  posterSize: string;
  backdropSize: string;
  info: object;
  loadCompleted: boolean = false;
  id: number;
  mobile: boolean = false;
  constructor(private filmService: FilmService, private route: ActivatedRoute) {
    this.route.params.subscribe((res) => (this.id = res.id));
  }

  ngOnInit(): void {
    this.setImg();
    if (window.screen.width <= 599) {
      this.mobile = true;
    }
  }

  getInfo(id): void {
    this.filmService.fetchFilm(id).subscribe((data) => {
      if (data['backdrop_path']) {
        data[
          'backdrop'
        ] = `${this.base_url}${this.backdropSize}/${data['backdrop_path']}`;
      }
      if (data['poster_path']) {
        data[
          'poster'
        ] = `${this.base_url}${this.posterSize}/${data['poster_path']}`;
      }
      this.info = data;
      this.loadCompleted = true;
      console.log(this.info);
    });
  }

  setImg(): void {
    this.filmService.fetchConfig().subscribe((data) => {
      this.base_url = data['images']['base_url'];
      this.posterSize = data['images']['poster_sizes'][3];
      this.backdropSize = data['images']['backdrop_sizes'][2];
      this.getInfo(this.id);
    });
  }

  getBackdrop() {
    if(this.info['backdrop']){
      return `url(${this.info['backdrop']})`;
    }
    return;
  }
}
