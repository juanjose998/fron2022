import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSComponent } from './eliminar-s.component';

describe('EliminarSComponent', () => {
  let component: EliminarSComponent;
  let fixture: ComponentFixture<EliminarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
