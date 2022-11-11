import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHComponent } from './eliminar-h.component';

describe('EliminarHComponent', () => {
  let component: EliminarHComponent;
  let fixture: ComponentFixture<EliminarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
