import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDComponent } from './nuevo-d.component';

describe('NuevoDComponent', () => {
  let component: NuevoDComponent;
  let fixture: ComponentFixture<NuevoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
