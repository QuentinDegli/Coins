import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCoinsComponent } from './modal-coins.component';

describe('ModalCoinsComponent', () => {
  let component: ModalCoinsComponent;
  let fixture: ComponentFixture<ModalCoinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCoinsComponent]
    });
    fixture = TestBed.createComponent(ModalCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
