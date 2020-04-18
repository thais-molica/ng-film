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

  fetchConfig(): Observable<Object> {
    return this.http.get(`${this.API}configuration?api_key=${this.API_KEY}`);
  }
  fetchPopular(): Observable<Object> {
    return this.http.get(`${this.API}discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}`);
  }

  fetchLatest(): Observable<Object> {
    return this.http.get(`${this.API}discover/movie?primary_release_date.gte=2020-03-17&primary_release_date.lte=2020-04-17&api_key=${this.API_KEY}`);
  }

  fetchBestRated(): Observable<Object> {
    return this.http.get(`${this.API}discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.API_KEY}`);
  }

  fetchSearch(param): Observable<Object> {
    return this.http.get(`${this.API}search/movie?api_key=${this.API_KEY}&query=${param}`);
  }

  fetchFilm(id): Observable<Object> {
    return this.http.get(`${this.API}movie/${id}?api_key=${this.API_KEY}`);
  }
}
