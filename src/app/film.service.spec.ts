import { TestBed, getTestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FilmService } from './film.service';

describe('FilmService', () => {
  let service: FilmService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilmService],
    });
    injector = getTestBed();
    service = injector.get(FilmService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be created', () => {
  //   expect(service.fetchFilm(1)).toBeTruthy();
  // });
});
