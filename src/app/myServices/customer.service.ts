import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../model/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = "../assets/customer.json";
  //private url:string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private httpClient: HttpClient) { }
  getCustomer(): Observable<Icustomer[]> {
    return this.httpClient.get<Icustomer[]>(this.url)
  }
}
