import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCardPageComponent } from './full-card-page.component';

describe('FullCardPageComponent', () => {
  let component: FullCardPageComponent;
  let fixture: ComponentFixture<FullCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
