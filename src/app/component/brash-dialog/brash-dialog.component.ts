import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage-service/storage.service';

@Component({
  selector: 'app-brash-dialog',
  templateUrl: './brash-dialog.component.html',
  styleUrls: ['./brash-dialog.component.scss'],
})
export class BrashDialogComponent {
  config: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BrashDialogComponent>,
    private storageService: StorageService
  ) {
    this.config = data.config;
  }

  addToFavorite() {
    const dublicatePhone = this.storageService.favoritePhones.find(
      (el) => el.id === this.config.item.id
    );

    if (!dublicatePhone) {
      this.storageService.favoritePhones.push(this.config.item);
    } else {
      alert('Уже добавлен в избранное');
    }
  }

  addToShop() {
    const shopingPhones = this.storageService.shopPhones.find(
      (el) => el.id === this.config.item.id
    );

    if (!shopingPhones) {
      this.storageService.shopPhones.push(this.config.item);
      alert('Уже добавлен в корзину');

      this.dialogRef.close();
    }
  }
}
