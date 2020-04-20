import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RibbonComponent } from './ribbon.component';

describe('RibbonComponent', () => {
  let component: RibbonComponent;
  let fixture: ComponentFixture<RibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.category = 'Category';
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have category', () => {
    fixture.detectChanges();
    let category = fixture.debugElement.query(By.css('h2')).nativeElement;

    expect(category.innerText).toContain('Category');
  });
});
