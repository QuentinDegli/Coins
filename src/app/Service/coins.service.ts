import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoins } from '../ICoins';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http:HttpClient) { }

  url = 'https://api.coincap.io/v2/assets';

  fetchAll(){
    return this.http.get<ICoins[]>(this.url)
  }

}
