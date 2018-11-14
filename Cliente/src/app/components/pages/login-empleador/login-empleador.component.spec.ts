import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmpleadorComponent } from './login-empleador.component';

describe('LoginEmpleadorComponent', () => {
  let component: LoginEmpleadorComponent;
  let fixture: ComponentFixture<LoginEmpleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEmpleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmpleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
