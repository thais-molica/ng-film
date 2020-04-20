import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have title', () => {
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(title.innerText).toContain('Ng Film');
  });

  it('should have link', () => {
    fixture.detectChanges();
    let href = fixture.debugElement
      .query(By.css('a'))
      .nativeElement.getAttribute('href');
    expect(href).toEqual('/');
  });
});
