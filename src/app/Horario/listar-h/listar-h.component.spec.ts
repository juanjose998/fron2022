import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHComponent } from './listar-h.component';

describe('ListarHComponent', () => {
  let component: ListarHComponent;
  let fixture: ComponentFixture<ListarHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
