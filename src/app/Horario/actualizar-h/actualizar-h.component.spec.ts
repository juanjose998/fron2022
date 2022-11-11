import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarHComponent } from './actualizar-h.component';

describe('ActualizarHComponent', () => {
  let component: ActualizarHComponent;
  let fixture: ComponentFixture<ActualizarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
