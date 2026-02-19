import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyPractice } from './diy-practice';

describe('DiyPractice', () => {
  let component: DiyPractice;
  let fixture: ComponentFixture<DiyPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiyPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiyPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
