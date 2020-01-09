import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private gitApi = 'https://api.github.com/search/users?q=users';

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get(this.gitApi);
  }
}
