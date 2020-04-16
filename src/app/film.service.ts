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

  constructor(private http: HttpClient) { }

  fetchFilm(): Observable<Object> {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/week?api_key=44fb267108da66bca930e0c68bf9bd68')
  }
}
