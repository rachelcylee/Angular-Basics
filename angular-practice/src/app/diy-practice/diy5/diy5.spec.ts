import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy5 } from './diy5';

describe('Diy5', () => {
  let component: Diy5;
  let fixture: ComponentFixture<Diy5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diy5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diy5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
