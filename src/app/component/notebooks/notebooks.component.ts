import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss'],
})
export class NotebooksComponent implements OnInit {
  notebookArr: any[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.notebookArr = this.storageService.notebookArr;
  }

  openNotebookDialog(notebook: any) {
    const config = {
      item: notebook,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
