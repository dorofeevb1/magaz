import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  BookArr,
  ListAllMenu,
  NotebookArr,
  PhoneArr,
  StorageService,
} from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  phoneArr: PhoneArr[] = [];
  bookArr: BookArr[] = [];
  notebookArr: NotebookArr[] = [];
  login: any[] = [];
  listAll: ListAllMenu[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.bookArr = this.storageService.booksArr;
    this.phoneArr = this.storageService.phoneArr;
    this.notebookArr = this.storageService.notebookArr;
    this.listAll = this.storageService.listAll;
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

  openBookDialog(book: any) {
    const config = {
      item: book,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
  openNotebookDialog(notebook: any) {
    const config = {
      item: notebook,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
