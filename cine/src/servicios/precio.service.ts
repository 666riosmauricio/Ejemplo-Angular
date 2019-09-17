import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {
  http:HttpClient;
  constructor(http:HttpClient) {
    this.http = http;
  }
  precio(){
    return this.http.get("http://localhost:5000/")
  }
}