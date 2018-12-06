import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoInterfazComponent } from './empleado-interfaz.component';

describe('EmpleadoInterfazComponent', () => {
  let component: EmpleadoInterfazComponent;
  let fixture: ComponentFixture<EmpleadoInterfazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoInterfazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
