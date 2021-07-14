import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  HeadsetsArr,
  StorageService,
} from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'headsets',
  templateUrl: './headsets.component.html',
  styleUrls: ['./headsets.component.scss'],
})
export class HeadsetsComponent implements OnInit {
  headsets: HeadsetsArr[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.headsets = this.storageService.HeadsetsArr;
  }

  deletePhone(headsets: any) {
    const headsetsIdx = this.headsets.findIndex((el) => el.id === headsets.id);

    console.log(headsetsIdx);

    this.headsets.splice(headsetsIdx, 1);
  }

  openBrashDialog(headsets: any) {
    const config = {
      item: headsets,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
