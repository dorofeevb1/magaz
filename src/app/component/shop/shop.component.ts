import { Component, OnInit } from '@angular/core';

import {
  PhoneArr,
  StorageService,
} from 'src/app/storage-service/storage.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  shopPhones: PhoneArr[] = [];

  totalPrice = 0;

  constructor(private storageService: StorageService) {
    this.shopPhones = this.storageService.shopPhones;
  }
  ngOnInit() {
    this._sumTotalPrice();
  }

  private _sumTotalPrice() {
    this.storageService.shopPhones.forEach((item) => {
      this.totalPrice += item.price;
    });
  }

  deletePhone(phone: any) {
    const phoneIdx = this.shopPhones.findIndex((el) => el.id === phone.id);

    console.log(phoneIdx);

    this.shopPhones.splice(phoneIdx, 1);
  }
}
