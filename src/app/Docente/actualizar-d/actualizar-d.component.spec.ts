import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDComponent } from './actualizar-d.component';

describe('ActualizarDComponent', () => {
  let component: ActualizarDComponent;
  let fixture: ComponentFixture<ActualizarDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
