import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'books',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookArr: any[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.bookArr = this.storageService.booksArr;
  }

  openBookDialog(book: any) {
    const config = {
      item: book,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
