import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDComponent } from './eliminar-d.component';

describe('EliminarDComponent', () => {
  let component: EliminarDComponent;
  let fixture: ComponentFixture<EliminarDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
