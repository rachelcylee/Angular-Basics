import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusButton } from './minus-button';

describe('MinusButton', () => {
  let component: MinusButton;
  let fixture: ComponentFixture<MinusButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinusButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinusButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
