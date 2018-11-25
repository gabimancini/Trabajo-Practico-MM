import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargodatosComponent } from './cargodatos.component';

describe('CargodatosComponent', () => {
  let component: CargodatosComponent;
  let fixture: ComponentFixture<CargodatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargodatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargodatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
