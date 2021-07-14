import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './component/main/main.component';
import { FavorComponent } from './component/favor/favor.component';
import { ShopComponent } from './component/shop/shop.component';
import { PhoneComponent } from './component/phone/phone.component';
import { BookComponent } from './component/book/book.component';
import { NotebooksComponent } from './component/notebooks/notebooks.component';
import { LoginComponent } from './component/login/login.component';
import { HeadsetsComponent } from './component/headsets/headsets.component';
import { KeyboardsComponent } from './component/keyboards/keyboards.component';
import { BlogComponent } from './component/blog/blog.component';
import { PostComponent } from './component/post/post.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'favor', component: FavorComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'phones', component: PhoneComponent },
  { path: 'books', component: BookComponent },
  { path: 'notebooks', component: NotebooksComponent },
  { path: 'login', component: LoginComponent },
  { path: 'headsets', component: HeadsetsComponent },
  { path: 'keyboards', component: KeyboardsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
