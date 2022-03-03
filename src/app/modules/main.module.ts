import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './component/main/main.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


const components = [MainComponent,DialogComponent ];

const modules = [MainRoutingModule, BrowserModule ,MatIconModule, 
    FormsModule, ReactiveFormsModule, CommonModule,BrowserModule,MatCardModule,MatGridListModule, MatDialogModule];

@NgModule({
    providers: [{
        provide: MatDialogRef,
        useValue: {
            close: (dialogResult: any) => { }
        }
        }],
    declarations: components,
    imports: modules,
})
export class MainModule {}