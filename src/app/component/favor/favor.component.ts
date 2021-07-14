import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'favor',
  templateUrl: './favor.component.html',
  styleUrls: ['./favor.component.scss']
})
export class FavorComponent implements OnInit {

  favoritePhones: any[] = [];

  constructor(private storageService: StorageService, private dialog: MatDialog) {
    this.favoritePhones = this.storageService.favoritePhones;
  }

  ngOnInit() {}

  deletePhone(phone: any) {
    const phoneIdx = this.favoritePhones.findIndex((el) => el.id === phone.id);

    console.log(phoneIdx);


    this.favoritePhones.splice(phoneIdx, 1);
  }
}


