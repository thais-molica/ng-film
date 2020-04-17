import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class FilmItem {
  constructor(
    public id: number,
    public rate: number,
    public title: string,
    public date: string,
    public img: string
    ){}
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  API = 'https://api.themoviedb.org/3/';
  API_KEY = '44fb267108da66bca930e0c68bf9bd68';

  constructor(private http: HttpClient) { }

  fetchPopular(): Observable<Object> {
    return this.http.get(`${this.API}trending/movie/week?api_key=${this.API_KEY}`);
  }

  fetchLatest(): Observable<Object> {
    return this.http.get(`${this.API}discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1`);
  }

  fetchSearch(param): Observable<Object> {
    return this.http.get(`${this.API}search/company?api_key=${this.API_KEY}&query=${param}`);
  }

  fetchFilm(id): Observable<Object> {
    return this.http.get(`${this.API}movie/${id}?api_key=${this.API_KEY}`);
  }
}
