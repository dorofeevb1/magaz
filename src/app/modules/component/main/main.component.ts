import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/core/services/images.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  cards: any = []
  
  constructor(
    private imagesService: ImagesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
  this.getCard()
  }

  getCard(){
    this.imagesService.getImagesCard().pipe().subscribe(res=>{

      this.cards = res
    })
  }

  openDialog(card:any){
    const dialogRef = this.dialog.open(DialogComponent, { data: card });

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}
