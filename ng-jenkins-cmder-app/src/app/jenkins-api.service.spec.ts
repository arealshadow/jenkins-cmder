import { TestBed } from '@angular/core/testing';

import { JenkinsApiService } from './jenkins-api.service';

describe('JenkinsApiService', () => {
  let service: JenkinsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenkinsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
