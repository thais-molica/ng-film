import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  list: any;

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSearch(param): void {
    this.filmService.fetchSearch(param).subscribe((data) => {
      data['results'].map(item => item.href = `detail/${item.id}`)
      this.list = data['results'] ;
      console.log(this.list)
    });
  }

  onKey(event: any):void {
    if(event.target.value.length > 3) {
      this.handleSearch(event.target.value)
    }
  }

  selectFilm(id: string): void {
    this.router.navigate(['/detail', id])
    this.list = []
  }

}
