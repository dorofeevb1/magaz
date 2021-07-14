import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  KeybordsArr,
  StorageService,
} from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss'],
})
export class KeyboardsComponent implements OnInit {
  keybords: KeybordsArr[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.keybords = this.storageService.KeybordsArr;
  }

  openNotebookDialog(keybords: any) {
    const config = {
      item: keybords,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
