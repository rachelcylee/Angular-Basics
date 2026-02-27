import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy6 } from './diy6';

describe('Diy6', () => {
  let component: Diy6;
  let fixture: ComponentFixture<Diy6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diy6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diy6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
