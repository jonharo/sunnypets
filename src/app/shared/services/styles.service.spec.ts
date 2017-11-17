import { TestBed, inject } from '@angular/core/testing';

import {} from 'jasmine';

import { StylesService } from './styles.service';

describe('StylesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StylesService]
    });
  });

  it('should be created', inject([StylesService], (service: StylesService) => {
    expect(service).toBeTruthy();
  }));
});
