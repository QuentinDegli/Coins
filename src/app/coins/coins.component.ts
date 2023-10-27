import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../Service/coins.service';
import { ICoins } from '../ICoins';


@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(private service: CoinsService){}

  coins: ICoins[] = [];
  search: string = '';
  coinsParent: ICoins | undefined;
  


ngOnInit() {
  this.getCoins();
  }

  getCoins(){
    this.service.fetchAll().subscribe( (data:any)=>{
      this.coins = data.data;
      return this.coins
    })
    }

    selectCoins(coin:ICoins){
      console.log(coin);
      this.coinsParent=coin;
    }

}