import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorComponent } from './favor.component';

describe('FavorComponent', () => {
  let component: FavorComponent;
  let fixture: ComponentFixture<FavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
