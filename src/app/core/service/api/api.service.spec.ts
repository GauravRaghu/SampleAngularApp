import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ApiService]
    });
  });

  it('service should be defined', async(
    inject([ApiService], (apiService: ApiService) => {
      expect(apiService).toBeDefined();
    })
  ));

  it(`should issue a request`, async(
    inject([HttpTestingController, ApiService], (backend: HttpTestingController, apiService: ApiService) => {
      apiService.get('/foo/bar').subscribe();
      backend.expectOne({
        url: '/foo/bar',
        method: 'GET'
      });
    })
  ));
});
