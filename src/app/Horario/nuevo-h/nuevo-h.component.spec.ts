import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoHComponent } from './nuevo-h.component';

describe('NuevoHComponent', () => {
  let component: NuevoHComponent;
  let fixture: ComponentFixture<NuevoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
