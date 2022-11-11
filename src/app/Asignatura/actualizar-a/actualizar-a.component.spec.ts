import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAComponent } from './actualizar-a.component';

describe('ActualizarAComponent', () => {
  let component: ActualizarAComponent;
  let fixture: ComponentFixture<ActualizarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
