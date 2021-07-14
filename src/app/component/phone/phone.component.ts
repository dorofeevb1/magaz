import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'phones',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  phoneArr: any[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.phoneArr = this.storageService.phoneArr;
  }

  deletePhone(phone: any) {
    const phoneIdx = this.phoneArr.findIndex((el) => el.id === phone.id);

    console.log(phoneIdx);

    this.phoneArr.splice(phoneIdx, 1);
  }

  openBrashDialog(phone: any) {
    const config = {
      item: phone,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
