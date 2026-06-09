import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle1 } from './detalle1';

describe('Detalle1', () => {
  let component: Detalle1;
  let fixture: ComponentFixture<Detalle1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalle1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalle1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
