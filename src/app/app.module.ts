import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MainComponent } from './component/main/main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrashDialogComponent } from './component/brash-dialog/brash-dialog.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ShopComponent } from './component/shop/shop.component';
import { FavorComponent } from './component/favor/favor.component';
import { PhoneComponent } from './component/phone/phone.component';
import { BookComponent } from './component/book/book.component';
import { NotebooksComponent } from './component/notebooks/notebooks.component';
import { LoginComponent } from './component/login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadsetsComponent } from './component/headsets/headsets.component';
import { KeyboardsComponent } from './component/keyboards/keyboards.component';
import { ChairsComponent } from './component/chairs/chairs.component';
import { BlogComponent } from './component/blog/blog.component';
import { PostComponent } from './component/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    BrashDialogComponent,
    ShopComponent,
    FavorComponent,
    PhoneComponent,
    BookComponent,
    NotebooksComponent,
    LoginComponent,
    HeadsetsComponent,
    KeyboardsComponent,
    ChairsComponent,
    BlogComponent,
    PostComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
