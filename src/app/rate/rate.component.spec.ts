import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RateComponent } from './rate.component';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.rate = '8';
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  it('should have rate', () => {
    fixture.detectChanges();
    let rate = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(rate.innerText).toContain('8');
  });
});
