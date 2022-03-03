import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './component/dialog/dialog.component';

import { MainComponent } from './component/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  
  {
      path:'dialog',
      component:DialogComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}