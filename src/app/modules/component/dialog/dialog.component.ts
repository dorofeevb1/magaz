import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagesService } from 'src/app/core/services/images.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  commentForm!: FormGroup;
  content:any = []

  get f() {
    return this.commentForm.controls;
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private imagesService: ImagesService, private fb: FormBuilder,) {}
  
  ngOnInit(): void {
    this.getSelectedCard()
    this.commentForm = this.fb.group({
      name: ['', [Validators.required]],
      commentPush: ['', [Validators.required]],
    });
  }
getSelectedCard(){
this.imagesService.getImgCard(this.data.id.toString()).pipe().subscribe(res=>{
this.content = res})
}

onSubmit() {
  if (this.commentForm.valid ) {
    this.imagesService.pushComment(this.commentForm.value.name, this.commentForm.value.commentPush, this.data.id.toString() ).subscribe(() => {
    });
  }
}
closeDialog(){
  this.dialog.closeAll();
}
}
