import { Component, Input } from '@angular/core';
import { ICoins } from '../ICoins';

@Component({
  selector: 'app-modal-coins',
  templateUrl: './modal-coins.component.html',
  styleUrls: ['./modal-coins.component.css']
})
export class ModalCoinsComponent {

  @Input() coinsEnfant: ICoins | undefined;
}
