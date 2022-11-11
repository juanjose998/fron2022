import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMComponent } from './actualizar-m.component';

describe('ActualizarMComponent', () => {
  let component: ActualizarMComponent;
  let fixture: ComponentFixture<ActualizarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
