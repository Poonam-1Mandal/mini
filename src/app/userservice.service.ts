import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }

  getImage(title)
  {
     return this.http.get("https://pixabay.com/api/?key=9342460-ab4a1cd16b8e1f5dc0a414105&q="+title+"&image_type=photo");
   
  }
}
