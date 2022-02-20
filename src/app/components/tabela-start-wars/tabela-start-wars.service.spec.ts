import { TestBed } from '@angular/core/testing';

import { TabelaStartWarsService } from './tabela-start-wars.service';

describe('TabelaStartWarsService', () => {
  let service: TabelaStartWarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelaStartWarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
