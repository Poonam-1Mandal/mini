import { Component } from '@angular/core';
import { UserService } from '../Userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
   providers : [UserService]
})
export class UserComponent {
  
photo;
title;
constructor(private iservice:UserService){}

getImageDetail(){
  
    
    this.iservice.getImage(this.title).subscribe(
    (response)=>{
      this.photo=response.json();
      this.photo=this.photo.hits;
    }
  );
  this.title="";
  
  
 
}

}