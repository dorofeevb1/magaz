
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getImagesCard() {
    return this.http.get(`https://boiling-refuge-66454.herokuapp.com/images`)
  }
  
  getImgCard(id:string) {
    return this.http.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
  }
  pushComment(name: string, comment: string, id: string){
   
      const reset = { name, comment };
  
      return this.http.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, reset);
    
  }
}
