import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BackendMessage } from './backendmessage.model';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}
  getData(){
    const url = environment.api_url
    return this.http.get<BackendMessage>(url)
  }
}
