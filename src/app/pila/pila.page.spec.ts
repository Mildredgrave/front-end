import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilaPage } from './pila.page';

describe('PilaPage', () => {
  let component: PilaPage;
  let fixture: ComponentFixture<PilaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PilaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
