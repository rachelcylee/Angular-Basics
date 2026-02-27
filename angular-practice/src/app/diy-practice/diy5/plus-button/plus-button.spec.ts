import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusButton } from './plus-button';

describe('PlusButton', () => {
  let component: PlusButton;
  let fixture: ComponentFixture<PlusButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
