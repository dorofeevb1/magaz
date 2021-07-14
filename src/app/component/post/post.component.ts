import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  BlogList,
  StorageService,
} from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  bloglist: BlogList[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.bloglist = this.storageService.blogList;
  }

  deletePhone(bloglist: any) {
    const bloglistIdx = this.bloglist.findIndex((el) => el.id === bloglist.id);

    console.log(bloglistIdx);

    this.bloglist.splice(bloglistIdx, 1);
  }

  openBrashDialog(bloglist: any) {
    const config = {
      item: bloglist,
    };
    this.dialog.open(BrashDialogComponent, { data: { config } });
  }
}
