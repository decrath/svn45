import { TestBed } from '@angular/core/testing';

import { SistemaService } from './sistema.service';

describe('SistemaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SistemaService = TestBed.get(SistemaService);
    expect(service).toBeTruthy();
  });
});
