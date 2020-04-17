import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  info: object;
  loadCompleted:boolean = false;
  constructor(private filmService: FilmService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.filmService.fetchFilm(res.id).subscribe((data) => {
        this.info = data;
        this.loadCompleted = true;
        // console.log(this.info)
      });

    })
  }


  ngOnInit(): void {
  }

}
