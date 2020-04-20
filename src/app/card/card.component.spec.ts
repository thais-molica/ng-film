import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.title = 'Title';
    component.date = 'date';
    component.img = 'https://dummyimage.com/600x400/000/fff';
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have title', () => {
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(title.innerText).toContain('Title');
  });
  it('should have date', () => {
    fixture.detectChanges();
    let date = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(date.innerText).toContain('date');
  });
  it('should have img', () => {
    fixture.detectChanges();
    let img = fixture.debugElement.query(By.css('img')).nativeElement;

    expect(img.src).toContain('https://dummyimage.com/600x400/000/fff');
  });
});
