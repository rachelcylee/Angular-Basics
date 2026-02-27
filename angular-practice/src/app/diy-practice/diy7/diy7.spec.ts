import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diy7 } from './diy7';

describe('Diy7', () => {
  let component: Diy7;
  let fixture: ComponentFixture<Diy7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diy7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diy7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
