import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [DetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.info = {
      backdrop: 'https://dummyimage.com/600x400/000/fff',
      genres: [ {id: 1, name: 'genre'}],
      overview: 'overview',
      poster: 'https://dummyimage.com/600x400/000/fff',
      release_date: '2019-09-17',
      tagline: 'tagline',
      title: 'title',
    };
    component.loadCompleted = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have backdrop', () => {
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.container')).nativeElement;

    expect(container.style.backgroundImage).toContain('url("https://dummyimage.com/600x400/000/fff")');
  });

  it('should have poster', () => {
    fixture.detectChanges();
    let img = fixture.debugElement.query(By.css('img')).nativeElement;

    expect(img.src).toContain('https://dummyimage.com/600x400/000/fff');
  });

  it('should have title', () => {
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(title.innerText).toContain('title');
  });

  it('should have release_date', () => {
    fixture.detectChanges();
    let date = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(date.innerText).toContain('Sep 17, 2019');
  });

  it('should have genre', () => {
    fixture.detectChanges();
    let date = fixture.debugElement.query(By.css('li')).nativeElement;

    expect(date.innerText).toContain('genre');
  });

  it('should have tagline', () => {
    fixture.detectChanges();
    let tagline = fixture.debugElement.query(By.css('.tagline')).nativeElement;

    expect(tagline.innerText).toContain('tagline');
  });

  it('should have overview', () => {
    fixture.detectChanges();
    let overview = fixture.debugElement.query(By.css('.overview')).nativeElement;

    expect(overview.innerText).toContain('overview');
  });
});
