import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSComponent } from './nuevo-s.component';

describe('NuevoSComponent', () => {
  let component: NuevoSComponent;
  let fixture: ComponentFixture<NuevoSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
