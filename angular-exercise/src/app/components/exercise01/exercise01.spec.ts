import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise01 } from './exercise01';

describe('Exercise01', () => {
  let component: Exercise01;
  let fixture: ComponentFixture<Exercise01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
