import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should return a random array', () => {
    const service: AppService = TestBed.get(AppService);
    const arrayGenerated = service.generateRandom(3);
    expect(arrayGenerated.length === 3).toBe(true);
  })

  it('should return an 0s array', () => {
    const service: AppService = TestBed.get(AppService);
    const arrayGenerated = service.generateEmpty(3);
    expect(arrayGenerated.length === 3).toBe(true);
    arrayGenerated.forEach((el,i) => {
      expect(arrayGenerated[i]).toBe(0);
    })
  })
});
