import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/storage-service/storage.service';
import { BrashDialogComponent } from '../brash-dialog/brash-dialog.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  dialog: any;
  lang: any;
  favoriteCounter = 0;

  constructor(public storageService: StorageService) {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: any) {
    console.log(lang);

    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
