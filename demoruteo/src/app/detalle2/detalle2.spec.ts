import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle2 } from './detalle2';

describe('Detalle2', () => {
  let component: Detalle2;
  let fixture: ComponentFixture<Detalle2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalle2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalle2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
