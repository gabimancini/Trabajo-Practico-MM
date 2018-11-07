import { TestBed } from '@angular/core/testing';

import { ServiciosEmpresaService } from './servicios-empresa.service';

describe('ServiciosEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosEmpresaService = TestBed.get(ServiciosEmpresaService);
    expect(service).toBeTruthy();
  });
});
